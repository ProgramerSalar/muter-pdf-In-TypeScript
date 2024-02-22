import express, { Request, Response, NextFunction } from "express";
import { PostPdf, getPdf } from "./controllers/pdf.js";
import { database } from "./database/db.js";
import { Singleupload } from "./middlewares/multer.js";
import multer from "multer";

const app = express();
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));



// multer Routes ------------------------------------

app.post("/PostPdf", Singleupload, PostPdf);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.json({
        message: "File To Large",
      });
    }
    if(error.code === "LIMIT_FILE_COUNT"){
      return res.json({
        message:"max 2 file are input not more than tw0"
      })
    }

    if(error.code === "LIMIT_UNEXPECTED_FILE"){
      return res.status(400).json({
        message:"File must be an Image"
      })
    }
  }
});

app.get("/getPdf", getPdf);

// api -------------------------------------------
const port = 5000;
app.listen(port, () => {
  console.log(`server is runinig in port ${port}`);
});

database();
