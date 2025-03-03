from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
import shutil
import os
import requests
import stripe
import psycopg2
from pymongo import MongoClient

# App Initialization
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security & JWT Configuration
SECRET_KEY = "YOUR_SECRET_KEY"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Database Connections
POSTGRES_URL = "postgresql://youruser:yourpassword@yourhost/yourdatabase"
MONGO_URL = "mongodb+srv://youruser:yourpassword@cluster.mongodb.net/yourdatabase"

pg_conn = psycopg2.connect(POSTGRES_URL)
mongo_client = MongoClient(MONGO_URL)
mongo_db = mongo_client["ai_code_storage"]

# Stripe API Configuration
stripe.api_key = "YOUR_STRIPE_SECRET_KEY"

def create_tables():
    with pg_conn.cursor() as cursor:
        cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                        id SERIAL PRIMARY KEY,
                        email TEXT UNIQUE NOT NULL,
                        password TEXT NOT NULL,
                        stripe_customer_id TEXT
                    )''')
        pg_conn.commit()

create_tables()

# Password Hashing
def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# JWT Token Generation
def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# User Authentication
@app.post("/register")
def register(email: str = Form(...), password: str = Form(...)):
    hashed_password = hash_password(password)
    stripe_customer = stripe.Customer.create(email=email)
    try:
        with pg_conn.cursor() as cursor:
            cursor.execute("INSERT INTO users (email, password, stripe_customer_id) VALUES (%s, %s, %s)", (email, hashed_password, stripe_customer["id"]))
            pg_conn.commit()
        return {"message": "User registered successfully"}
    except psycopg2.IntegrityError:
        raise HTTPException(status_code=400, detail="Email already registered")

@app.post("/login")
def login(email: str = Form(...), password: str = Form(...)):
    with pg_conn.cursor() as cursor:
        cursor.execute("SELECT password FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()
    
    if user and verify_password(password, user[0]):
        token = create_access_token({"sub": email}, timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
        return {"access_token": token, "token_type": "bearer"}
    else:
        raise HTTPException(status_code=400, detail="Invalid credentials")

# File Upload & Screenshot-to-Code Integration
@app.post("/upload")
def upload_file(file: UploadFile = File(...)):
    save_path = f"uploads/{file.filename}"
    with open(save_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    response = requests.post("http://localhost:5000/api/upload", files={"image": open(save_path, "rb")})
    os.remove(save_path)
    if response.status_code == 200:
        mongo_db.generated_code.insert_one(response.json())
        return response.json()
    else:
        raise HTTPException(status_code=response.status_code, detail="Error processing image")

# Fetch Generated Code
@app.get("/generated-code")
def get_generated_code():
    latest_code = mongo_db.generated_code.find().sort("_id", -1).limit(1)
    return list(latest_code)

# Stripe Payment Handling
@app.post("/create-checkout-session")
def create_checkout_session(email: str = Form(...), plan: str = Form(...)):
    with pg_conn.cursor() as cursor:
        cursor.execute("SELECT stripe_customer_id FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    session = stripe.checkout.Session.create(
        customer=user[0],
        payment_method_types=["card"],
        line_items=[
            {
                "price": plan, 
                "quantity": 1,
            }
        ],
        mode="subscription",
        success_url="https://yourwebsite.com/success",
        cancel_url="https://yourwebsite.com/cancel",
    )
    return {"checkout_url": session.url}

# Get Pricing Plans
@app.get("/pricing")
def get_pricing():
    return stripe.Price.list()

# Run the API
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
