import jwt from "jsonwebtoken";
import { TokenPayload } from "../interface";
import config from "./config";

export const generateAccessToken = (
  userId: string,
  email: string,
  profileUrl: string,
  status: "regular" | "premium",
  username: string
): string => {
  const expiredDays = 1;
  const expiredSecond = expiredDays * 24 * 60 * 60;
  const expired = Math.floor(new Date().getTime() / 1000.0) + expiredSecond;
  return generateToken({
    payload: {
      email,
      id: userId,
      profileUrl,
      status,
      username,
    },
    expired,
    secretKey: config.jwt.accessPrivateKey,
  });
};

export const generateRefreshToken = (
  userId: string,
  email: string,
  profileUrl: string,
  status: "regular" | "premium",
  username: string
): string => {
  const expiredDays = 14;
  const expired = expiredDays * 24 * 60 * 60;
  return generateToken({
    payload: {
      email,
      id: userId,
      profileUrl,
      status,
      username,
    },
    expired,
    secretKey: config.jwt.accessPrivateKey,
  });
};

const generateToken = ({
  payload,
  secretKey,
  expired,
}: TokenPayload): string => {
  const iat = Math.floor(new Date().getTime() / 1000.0);
  const exp = iat + expired;

  return jwt.sign({ ...payload, iat, exp }, secretKey);
};
