import mongoose, { connect } from "mongoose";
import { User } from "../models/user";

const config = { isConnected: 0 };

export const connectToDB = async () => {
  try {
    if (config.isConnected == 1) {
      return;
    }
    const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "WorkManager",
    });
    // console.log(connection.readyState);
    config.isConnected = connection.readyState;
    console.log("Database Is Connected");
  } catch (error) {
    console.log("Error in Connection with database");
    console.log(error);
  }
};
