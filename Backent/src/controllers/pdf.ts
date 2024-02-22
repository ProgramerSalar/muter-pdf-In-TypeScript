import { NextFunction, Response, Request } from "express";
import { PdfModel } from "../model/pdf.js";

export const PostPdf = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  
  
  // const name = req.body.name;
  // let file = req.files
  // const pdf = req.file?.filename;

  // console.log("file",file)
  // console.log("name",name)

  // const userPdf = await PdfModel.create({ name, file });
  // const userPdf = await PdfModel.create({ name, pdf });
  // console.log(userPdf);

  res.status(200).json({
    success: true,
    // userPdf,
  });
};

export const getPdf = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const getPdf = await PdfModel.find({});
  return res.status(200).json({
    success: true,
    getPdf,
  });
};
