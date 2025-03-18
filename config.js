require('dotenv').config();

module.exports = {
  paystackSecret: process.env.PAYSTACK_SECRET,
  paystackUrl: process.env.PAYSTACK_URL || 'https://api.paystack.co',
  mongoUri: process.env.MONGO_URI,
};
