from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserDesignHistory, DesignRequest
from .serializers import UserDesignHistorySerializer
import anthropic
import requests
import base64
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Anthropic client with explicit configuration
client = anthropic.Anthropic(
    api_key=os.getenv('ANTHROPIC_API_KEY'),
    base_url="https://api.anthropic.com",
    default_headers={
        "anthropic-version": "2023-06-01"
    }
)

class GenerateFlutterCodeView(APIView):
    def post(self, request):
        try:
            prompt = request.data.get('prompt', '')
            image = request.FILES.get('image')
            url = request.data.get('url')
            
            # Handle URL-based screenshot
            if url:
                try:
                    # Take screenshot using a service (you might want to use a proper screenshot service)
                    response = requests.get(url)
                    img_str = base64.b64encode(response.content).decode()
                except Exception as e:
                    return Response({"error": f"Failed to capture screenshot: {str(e)}"}, 
                                  status=status.HTTP_400_BAD_REQUEST)
            
            # Handle uploaded image
            elif image:
                # Read the image file directly as bytes
                img_bytes = image.read()
                img_str = base64.b64encode(img_bytes).decode()
            
            # Handle text-only prompt
            else:
                img_str = None

            # Prepare the message for Claude
            messages = []

            if img_str:
                messages.append({
                    "role": "user",
                    "content": [
                        {
                            "type": "image",
                            "source": {
                                "type": "base64",
                                "media_type": "image/png",
                                "data": img_str
                            }
                        },
                        {
                            "type": "text",
                            "text": f"{prompt}\n\nIMPORTANT: Generate ONLY the code implementation. Do not include any explanations, descriptions, or comments. The response should be purely code that can be directly used."
                        }
                    ]
                })
            else:
                messages.append({
                    "role": "user",
                    "content": f"{prompt}\n\nIMPORTANT: Generate ONLY the code implementation. Do not include any explanations, descriptions, or comments. The response should be purely code that can be directly used."
                })

            # Call Claude API
            message = client.messages.create(
                model="claude-3-7-sonnet-20250219",
                max_tokens=20000,
                messages=messages,
                temperature=0.7,
                system="You're a helpful code assistant who generates code based on the instructions. In your output generate code only and do not add ``` in the start or end of the text you generate"
            )

            # Extract the generated code from Claude's response
            generated_code = message.content[0].text

            # Save to database
            design_request = DesignRequest.objects.create(
                user=request.user,
                prompt=prompt,
                url=url,
                ai_response=generated_code
            )

            # Create history entry
            UserDesignHistory.objects.create(
                user=request.user,
                design_request=design_request,
                status="completed"
            )

            return Response({
                "message": "Code generated successfully",
                "responsed_code": generated_code
            }, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({
                "error": f"Failed to generate code: {str(e)}"
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class UserDesignHistoryView(APIView):
    def get(self, request):
        history = UserDesignHistory.objects.filter(user=request.user)
        serializer = UserDesignHistorySerializer(history, many=True)
        return Response(serializer.data) 