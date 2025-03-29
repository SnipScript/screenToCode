import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'http://localhost:8000/api';

export const generateCode = async (formData) => {
  try {
    const token = Cookies.get('accessToken');
    const response = await axios.post(`${API_BASE_URL}/imgtocode/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserHistory = async () => {
  try {
    const token = Cookies.get('accessToken');
    const response = await axios.get(`${API_BASE_URL}/history/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}; 