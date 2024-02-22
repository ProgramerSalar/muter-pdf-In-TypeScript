import { Request } from "express";
import { Callback } from "mongoose";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

// how to set validation 
const fileFilter = (req, file, cb) => {
  if(file.mimetype.split("/")[0] === 'image'){
    cb(null, true)

  }else{
    cb(new Error("file is not of correct type"), false)
  }

}


// single file upload using multer 
export const Singleupload = multer({ storage: storage, fileFilter }).single('file')


// multiple file upload using multer 
// export const Singleupload = multer({ storage: storage }).array('file')


// multiple image upload 
// what is name, this is accept of file name 
// export const Singleupload = multer({ storage: storage }).fields([
//   {name:"avatar", maxCount:10},
//   {name:'photo', maxCount:10}
// ])



