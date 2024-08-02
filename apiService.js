import axios from 'axios';

// const API_URL = 'https://ride-together-mybackend.onrender.com/api/v1/auth'; // replace with your IP
// const API_URL = 'http://10.0.2.2:8080/api/v1/auth';
// const API_URL = 'http://192.168.1.5:8081/api/v1/auth';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
};


  export const verifyOtp = async (otpData, token) => {
    try {
      const response = await axios.post(`${API_URL}/verify-otp`,  { otp: otpData },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
      });
      console.log('Verify OTP response:', response.data); // Debugging: Log the response
      return response.data; // Assuming your API returns a success field and a data object
    } catch (error) {
      console.error('Error verifying OTP:', error.response ? error.response.data : error.message);
      throw error;
    }
  
};
