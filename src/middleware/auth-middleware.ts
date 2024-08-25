import jwt, { type Secret } from "jsonwebtoken";
import { type Request, type Response, type NextFunction } from "express";
import { ResponseHandler } from "../utils/response-handler";
import { PayloadAccessToken, RequestWithAccessToken } from "../interface";

const SECRET_KEY: Secret = process.env.JWT_SECRET as Secret;

export const auth = (req: Request, _: Response, next: NextFunction) => {
  // const token = req.headers.authorization?.split(" ")[1];
  // if (!token) {
  //   return res.status(401).json({
  //     message: "Unauthorized",
  //   });
  // }
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      ResponseHandler.unauthorized(next, "Token tidak ditemukan");
      return;
    }
    const decoded = jwt.verify(token, SECRET_KEY) as PayloadAccessToken;
    if (Object.keys(decoded).length === 0) {
      ResponseHandler.unauthorized(next, "Token tidak valid");
    }
    (req as unknown as RequestWithAccessToken).tokenPayload = decoded;
    (req as unknown as RequestWithAccessToken).token = token;
    next();
  } catch (error) {
    console.error("Error Auth Middleware => ", error);
    ResponseHandler.unauthorized(next, "Silahkan login terlebih dahulu");
  }
};
