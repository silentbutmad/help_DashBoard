import api from '../utils/axios';

export const authApi = {
  login: async (credentials) => {
    console.log('Making login request with:', credentials); // Debug log
    try {
      const response = await api.post('/auth/login', credentials);
      console.log('Raw API response:', response); // Debug log
      console.log('Response data:', response.data); // Debug log
      return response.data;
    } catch (error) {
      console.error('API request failed:', error); // Debug log
      throw error;
    }
  },

  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token, newPassword) => {
    const response = await api.post('/auth/reset-password', { token, newPassword });
    return response.data;
  },

  changePassword: async (oldPassword, newPassword) => {
    const response = await api.post('/auth/change-password', { oldPassword, newPassword });
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  updateProfile: async (profileData) => {
    const response = await api.put('/auth/profile', profileData);
    return response.data;
  },
};