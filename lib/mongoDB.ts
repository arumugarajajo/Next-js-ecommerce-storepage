import mongoose from "mongoose";
import express from "express";
import cors from "cors";

let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "DesireDazzle",
    });

    isConnected = true;
    // console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

const app = express();
app.use(cors());

connectToDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
