import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from "express";
import { AppError } from "../middleware";
import { ERROR_CODE } from "../interface";
import { ResponseHandler } from "../utils/response-handler";

const route = Router();

route.get("/", (req: Request, res: Response) => {
  ResponseHandler.ok(res, null, "Hello World 🚀");
});

route.use("*", (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(ERROR_CODE.NOT_FOUND.code);
  next(error);
});

export default route;
