import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./server.js";

dotenv.config({ path: "./.env" });

const startServer = async () => {
  try {
    await connectDB();

    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
    });
  } catch (err) {
    console.error("🚨 Failed to start server:", err.message);
    process.exit(1); // exit only here if critical
  }
};

startServer();
