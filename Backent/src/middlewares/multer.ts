import { Request } from "express";
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
const fileFilter = (req:Request, file:any, cb:any) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    // cb(new Error("file is not of correct type"), false);
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false)   // if you give this error here mins down the post show input the error field
  }
};

// single file upload using multer
export const Singleupload = multer({
  storage: storage,
  fileFilter,
  // An object specifying the size limits of the following optional properties
  limits: {
    fileSize:100000,   // 10 mins 10 bites of file this is the limit of two file
    files:2           // 2 mins, maximum two files are upload

  },
}).array("file");

// multiple file upload using multer
// export const Singleupload = multer({ storage: storage }).array('file')

// multiple image upload
// what is name, this is accept of file name
// export const Singleupload = multer({ storage: storage }).fields([
//   {name:"avatar", maxCount:10},
//   {name:'photo', maxCount:10}
// ])
