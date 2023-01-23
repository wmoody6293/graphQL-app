const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB Connected!'.cyan.underline);
};

module.exports = connectDB;
