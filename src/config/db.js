import mongoose from "mongoose";

export const connectionDB = () => {
  try {
    const conn =mongoose.connect("mongodb://localhost:27017/coolautomation") ;
    conn && console.log("Connected to MongoDB");
  } catch (error) {
    next(error);
  }
};
