import rateLimit from "express-rate-limit";

import { ResponseHandler } from "./response-handler";

export const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 1, // Limit each IP to 1 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: function (request, response, next) {
    ResponseHandler.tooManyRequests(
      next,
      "Anda mengirim terlalu banyak permintaan."
    );
  },
});
