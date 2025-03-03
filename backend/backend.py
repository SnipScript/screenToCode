from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
import shutil
import os
import requests
import stripe
# import psycopg2  # Commented out for now
# from pymongo import MongoClient  # Commented out for now

# App Initialization
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for CORS
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security & JWT Configuration
SECRET_KEY = "YOUR_SECRET_KEY"  # Replace with your actual secret key
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Database Connections (commented out for now)
# POSTGRES_URL = "postgresql://youruser:yourpassword@yourhost/yourdatabase"  # Update with your DB credentials
# MONGO_URL = "mongodb+srv://youruser:yourpassword@cluster.mongodb.net/yourdatabase"  # Update with your MongoDB credentials

# pg_conn = psycopg2.connect(POSTGRES_URL)  # Connect to PostgreSQL
# mongo_client = MongoClient(MONGO_URL)  # Connect to MongoDB
# mongo_db = mongo_client["ai_code_storage"]  # Select the database

# Stripe API Configuration
stripe.api_key = "YOUR_STRIPE_SECRET_KEY"  # Replace with your actual Stripe secret key

def create_tables():
    """Create necessary tables in the PostgreSQL database."""
    # with pg_conn.cursor() as cursor:  # Commented out for now
    #     cursor.execute('''CREATE TABLE IF NOT EXISTS users (
    #                     id SERIAL PRIMARY KEY,
    #                     email TEXT UNIQUE NOT NULL,
    #                     password TEXT NOT NULL,
    #                     stripe_customer_id TEXT
    #                 )''')
    #     pg_conn.commit()

# create_tables()  # Call the function to create tables (commented out for now)

# Password Hashing
def hash_password(password: str):
    """Hash a password using bcrypt."""
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    """Verify a plain password against a hashed password."""
    return pwd_context.verify(plain_password, hashed_password)

# JWT Token Generation
def create_access_token(data: dict, expires_delta: timedelta = None):
    """Create a JWT access token."""
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# User Authentication
@app.post("/register")
def register(email: str = Form(...), password: str = Form(...)):
    """Register a new user."""
    hashed_password = hash_password(password)
    stripe_customer = stripe.Customer.create(email=email)  # Create a Stripe customer
    # try:
    #     with pg_conn.cursor() as cursor:  # Commented out for now
    #         cursor.execute("INSERT INTO users (email, password, stripe_customer_id) VALUES (%s, %s, %s)", (email, hashed_password, stripe_customer["id"]))
    #         pg_conn.commit()
    #     return {"message": "User registered successfully"}
    # except psycopg2.IntegrityError:
    #     raise HTTPException(status_code=400, detail="Email already registered")

@app.post("/login")
def login(email: str = Form(...), password: str = Form(...)):
    """Log in a user and return an access token."""
    # with pg_conn.cursor() as cursor:  # Commented out for now
    #     cursor.execute("SELECT password FROM users WHERE email = %s", (email,))
    #     user = cursor.fetchone()
    
    # if user and verify_password(password, user[0]):
    #     token = create_access_token({"sub": email}, timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    #     return {"access_token": token, "token_type": "bearer"}
    # else:
    #     raise HTTPException(status_code=400, detail="Invalid credentials")

# File Upload & Screenshot-to-Code Integration
@app.post("/upload")
def upload_file(file: UploadFile = File(...)):
    """Upload a file and process it."""
    save_path = f"uploads/{file.filename}"
    with open(save_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    response = requests.post("http://localhost:5000/api/upload", files={"image": open(save_path, "rb")})
    os.remove(save_path)  # Remove the file after processing
    if response.status_code == 200:
        # mongo_db.generated_code.insert_one(response.json())  # Store generated code in MongoDB (commented out for now)
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code, detail="Error processing image")

# Fetch Generated Code
@app.get("/generated-code")
def get_generated_code():
    """Fetch the most recently generated code."""
    # code_data = mongo_db.generated_code.find().sort("_id", -1).limit(1)  # Commented out for now
    # return list(code_data)

# Stripe Payment Handling
@app.post("/create-checkout-session")
def create_checkout_session(email: str = Form(...), plan: str = Form(...)):
    """Create a Stripe checkout session for a subscription."""
    # with pg_conn.cursor() as cursor:  # Commented out for now
    #     cursor.execute("SELECT stripe_customer_id FROM users WHERE email = %s", (email,))
    #     user = cursor.fetchone()
    
    # if not user:
    #     raise HTTPException(status_code=404, detail="User not found")
    
    session = stripe.checkout.Session.create(
        customer="dummy_customer_id",  # Placeholder for customer ID (commented out for now)
        payment_method_types=["card"],
        line_items=[
            {
                "price": plan, 
                "quantity": 1,
            }
        ],
        mode="subscription",
        success_url="https://yourwebsite.com/success",  # Update with your success URL
        cancel_url="https://yourwebsite.com/cancel",    # Update with your cancel URL
    )
    return {"checkout_url": session.url}

# Get Pricing Plans
@app.get("/pricing")
def get_pricing():
    """Fetch available pricing plans from Stripe."""
    return stripe.Price.list()

# Health Check API
@app.get("/health")
def health_check():
    """Health check endpoint to verify the API is running."""
    return {"status": "healthy"}

# Run the API
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)  # Start the FastAPI application
