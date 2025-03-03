// React Frontend API Integration

const API_BASE_URL = "https://yourbackend.com"; // Update with your deployed backend URL

// User Authentication
export async function registerUser(email, password) {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      body: formData,
    });
    return await response.json();
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Failed to register. Try again." };
  }
}

export async function loginUser(email, password) {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
    }
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    return { error: "Invalid credentials. Try again." };
  }
}

// Upload Screenshot for AI Processing
export async function uploadScreenshot(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/upload`, {
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
export async function fetchGeneratedCode() {
  try {
    const response = await fetch(`${API_BASE_URL}/generated-code`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching generated code:", error);
    return { error: "Failed to retrieve generated code." };
  }
}

// Stripe Checkout for Subscriptions
export async function createCheckoutSession(email, plan) {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("plan", plan);

    const response = await fetch(`${API_BASE_URL}/create-checkout-session`, {
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
