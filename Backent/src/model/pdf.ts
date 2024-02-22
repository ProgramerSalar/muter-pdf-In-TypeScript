import mongoose from "mongoose";


interface PdfProps{
  name:string;
  file:[]
}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name of Pdf "],
  },
  file: {
    type: Array,
    required: [true, "Please Enter Pdf FIle"],
  },
});

export const PdfModel = mongoose.model<PdfProps>("PdfFile", schema);
