// React Frontend API Integration
import Cookies from "js-cookie";
import axios from "axios";
export const API_BASE_URL = "https://bguess-django.onrender.com/api";

export async function registerUser(email, password) {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/signup/`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(email, password) {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/signin/`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

// Upload Screenshot for AI Processing
export async function uploadScreenshot(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/upload/`, {
      method: "POST",
      body: formData,
    });
    return await response.json();
  } catch (error) {
    console.error("Error uploading screenshot:", error);
    return { error: "Upload failed. Try again." };
  }
}

// Fetch AI-Generated Code
export async function generateCode(payload) {
  const token = Cookies.get("accessToken");
  try {
    const response = await axios.post(`${API_BASE_URL}/imgtocode/`, payload, {
      headers: {
        Authorization: "Bearer " + token,
        // Authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching generated code:", error);
    throw error;
  }
}

// Stripe Checkout for Subscriptions
export async function createCheckoutSession(email, plan) {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("plan", plan);

    const response = await fetch(`${API_BASE_URL}/create-checkout-session/`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.checkout_url) {
      window.location.href = data.checkout_url;
    }
    return data;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return { error: "Checkout failed. Try again." };
  }
}
