import express from "express";
import { PostPdf, getPdf } from "./controllers/pdf.js";
import { database } from "./database/db.js";
import { Singleupload } from "./middlewares/multer.js";
import multer from "multer";


import bodyParser  from 'body-parser'
const app = express();
app.use(express.json())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// multer Routes ------------------------------------




app.post("/PostPdf", Singleupload, PostPdf )

app.get("/getPdf", getPdf)

// api -------------------------------------------
const port = 5000;
app.listen(port, () => {
  console.log(`server is runinig in port ${port}`);
});

database();
