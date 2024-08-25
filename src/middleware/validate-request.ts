import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { cleanJoiErrorMessage } from "../utils/clean-joi-error-message";
import { ResponseHandler } from "../utils/response-handler";

export const validateRequest =
  (schema: Joi.ObjectSchema, type: "params" | "body" | "query" = "body") =>
  (request: Request, response: Response, next: NextFunction) => {
    const { error } = schema.validate(request[type]);
    if (error) {
      ResponseHandler.badRequest(next, cleanJoiErrorMessage(error));
      return;
    }
    next();
  };
