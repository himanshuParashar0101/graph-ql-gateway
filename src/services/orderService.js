const axios = require('axios');
const orderServiceURL = process.env.ORDER_SERVICE_URL;
console.log("ORDER_SERVICE_URL", orderServiceURL);

module.exports = {
  getOrders: async () => {
    const response = await axios.get(`${orderServiceURL}/api/orders`);
    return response.data;
  },
  getOrder: async (id) => {
    const response = await axios.get(`${orderServiceURL}/api/orders/${id}`);
    return response.data;
  },
  placeOrder: async (input) => {
    const response = await axios.post(`${orderServiceURL}/api/orders`, input);
    return response.data;
  }
};
