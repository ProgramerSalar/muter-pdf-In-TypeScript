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


// single file upload using multer 
// export const Singleupload = multer({ storage: storage }).single('file')


// multiple file upload using multer 
// export const Singleupload = multer({ storage: storage }).array('file')


// multiple image upload 
// what is name, this is accept of file name 
export const Singleupload = multer({ storage: storage }).fields([
  {name:"avatar", maxCount:10},
  {name:'photo', maxCount:10}
])

