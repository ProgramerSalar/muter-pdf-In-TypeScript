import express from "express";
import { PostPdf, getPdf } from "./controllers/pdf.js";
import { database } from "./database/db.js";
import { Singleupload } from "./middlewares/multer.js";

const app = express();
app.use(express.json());

// multer Routes ------------------------------------




app.post("/PostPdf", Singleupload, PostPdf )
app.get("/getPdf", getPdf)

// api -------------------------------------------
const port = 5000;
app.listen(port, () => {
  console.log(`server is runinig in port ${port}`);
});

database();
