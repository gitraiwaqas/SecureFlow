// seedUser.js
import mongoose from "mongoose";
import dotenv from "dotenv";
// import { User } from "../src/models/user.model.js";
import User from "../src/models/user.model.js";

dotenv.config();

const seedUser = async () => {
  try {
    // connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");

    // clear existing user (optional, so duplicates don't break things)
    await User.deleteMany({ email: "admin@example.com" });

    // create a new user (plain text password!)
    const user = new User({
      email: "admin@example.com",
      password: "12345678", // plain text → will be hashed by pre("save")
    });

    await user.save();
    console.log("✅ User created successfully:", user.email);

    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error seeding user:", error);
    mongoose.disconnect();
  }
};

seedUser();
