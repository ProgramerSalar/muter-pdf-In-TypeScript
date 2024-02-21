import { NextFunction, Response, Request } from "express";
import { PdfModel } from "../model/pdf.js";

export const PostPdf = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const name = req.body.name;
  const pdf = req.file?.filename;

  // console.log(pdf)
  // console.log(name)

  const userPdf = await PdfModel.create({ name, pdf });
  // console.log(userPdf);

  res.status(200).json({
    success: true,
    userPdf,
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
