import mongoose from "mongoose";

export async function dataBaseConnection() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    throw error; // Re-throw the error for proper error handling
  }
}