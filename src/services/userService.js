const axios = require('axios');
const userServiceURL = process.env.USER_SERVICE_URL;

module.exports = {
    getUsers: async () => {
        try {
          const response = await axios.get(`${userServiceURL}/api/users`);
          console.log('User Service Data:', response.data); // Log only data
          return response.data;
        } catch (error) {
          console.error('Error fetching users:', error.message);
          throw new Error('Failed to fetch users');
        }
      },
  getUser: async (id) => {
    const response = await axios.get(`${userServiceURL}/api/users/${id}`);
    return response.data; // Return only the data part
  },
  registerUser: async (input) => {
    const response = await axios.post(`${userServiceURL}/api/users/register`, input);
    return response.data; // Return only the data part
  }
};
