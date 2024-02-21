import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name of Pdf "],
  },
  pdf: {
    type: String,
    required: [true, "Please Enter Pdf FIle"],
  },
});

export const PdfModel = mongoose.model("PdfFile", schema);
