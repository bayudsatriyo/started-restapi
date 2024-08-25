import dotenv from "dotenv";

dotenv.config();

const config = {
  env: process.env.APP_ENV,
  url: process.env.APPLICATION_URL,
  port: process.env.PORT,
  jwt: {
    accessPrivateKey: process.env.JWT_ACCESS_PRIVATE_KEY ?? "default",
    refreshPrivateKey: process.env.JWT_REFRESH_PRIVATE_KEY ?? "default",
  },
  google: {
    auth: {
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID ?? "default",
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET ?? "default",
    },
  },
  storage: {
    accessKeyId: process.env.STORAGE_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY ?? "",
    bucket: process.env.STORAGE_BUCKET ?? "",
    region: process.env.STORAGE_REGION ?? "",
    endpoint: process.env.STORAGE_ENDPOINT ?? "",
  },
  encryption: {
    cryptoKey: process.env.CRYPTO_KEY ?? "",
    vector: process.env.VECTOR_IV ?? "",
  },
};

export default config;
