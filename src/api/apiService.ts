import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "http://10.0.2.2:8000"; // Change to match your backend server URL

// Function to handle API requests with token authentication
const fetchProtectedData = async () => {
  const token = await AsyncStorage.getItem("accessToken");

  const response = await fetch("http://10.0.2.2:8000/protected-endpoint/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    console.log("Protected data:", data);
  } else {
    console.error("Failed to fetch protected data");
  }
};

// Function to obtain a token
export const loginUser = async (username: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      return response.json(); // Returns { access: token, refresh: token }
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
