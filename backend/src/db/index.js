import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`✅ MongoDB Connected [DB: ${DB_NAME}]`);
    return connection;
  } catch (error) {
    throw new Error(
      `❌ MongoDB Connection Failed [DB: ${DB_NAME}] → ${error.message}`
    );
  }
};

export default connectDB;
