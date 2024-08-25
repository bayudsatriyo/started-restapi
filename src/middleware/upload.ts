import multer from "multer";
import { ERROR_CODE } from "../interface";
import { AppError } from "./error-handler";
import path from "path";
import { Request } from "express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const multerGoogleStorage = require("multer-google-storage");

type FilenameCallback = (error: Error | null, filename: string) => void;

declare global {
  namespace Express {
    // tambahkan properti user pada tipe Request
    interface Request {
      date: Date;
      format: string;
    }
  }
}

const fileTypes = ["jpg", "jpeg", "png"];

export const upload = multer({
  storage: multerGoogleStorage.storageEngine({
    bucket: process.env.GOOGLE_BUCKET_NAME,
    projectId: process.env.GOOGLE_PROJECT_ID,
    keyFilename: path.resolve(__dirname, "..", "..", "serviceaccountkey.json"),
    filename(req: Request, file: Express.Multer.File, cb: FilenameCallback) {
      const fileExt = file.originalname.split(".").pop() ?? "";
      const fileExtLower = fileExt.toLowerCase();
      if (!fileTypes.includes(fileExtLower)) {
        throw new AppError(
          ERROR_CODE.BAD_REQUEST.code,
          "Only image and PDF files are allowed!"
        );
      }
      req.date = new Date();
      req.format = req.date.toLocaleTimeString("id-ID", { hour12: false });
      cb(null, `${req.format}-${file.originalname}`);
    },
    limits: {
      fileSize: 1024 * 1024 * 5, // 5MB
    },
  }),
});
