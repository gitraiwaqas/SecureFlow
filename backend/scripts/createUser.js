/**
 * Usage (run manually as admin):
 * node scripts/createUser.js name email password
 */
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
// import { User } from "../src/models/user.model.js";
import User from "../src/models/user.model.js";
import { DB_NAME } from "../src/constants.js";

dotenv.config();

const [, , name, email, password] = process.argv;

if (!name || !email || !password) {
  console.error("❌ Usage: node scripts/createUser.js name email password");
  process.exit(1);
}

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: DB_NAME });
    console.log("✅ MongoDB connected successfully!");

    const exists = await User.findOne({ email });
    if (exists) {
      console.log("⚠️ User already exists:", exists.email);
      console.log("🔑 Stored hash in DB:", exists.password);
      process.exit(0);
    }

    // Log the plain password
    console.log("🟢 Plain password (input):", password);

    // 🔒 Hash password before saving
    // const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("🔑 Hashed password (to be stored):", hashedPassword);

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    console.log("🎉 Created user:", user.email);
    console.log("📌 Saved hashed password:", user.password);

    process.exit(0);
  } catch (e) {
    console.error("❌ Failed to create user:", e.message);
    process.exit(1);
  }
}

run();
