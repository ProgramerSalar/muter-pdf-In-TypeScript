import mongoose from "mongoose";

export const database = async () => {
  try {
    const db = mongoose
      .connect(
        "mongodb+srv://udamy_user:vfVjiniUHSosqrV2@cluster0.8r3vhxn.mongodb.net/?retryWrites=true&w=majority",
        {
          dbName: "Multer-Pdf",
        }
      )
      .then(() => console.log("Database is Connected..........."));
  } catch (err) {
    console.log(err);
  }
};
