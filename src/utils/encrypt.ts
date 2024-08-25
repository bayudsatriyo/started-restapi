import crypto from 'crypto'
import config from './config';

const cryptoKey = Buffer.from(config.encryption.cryptoKey);
const iv = Buffer.from(config.encryption.vector);

export const encrypt = (plainText: string) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', cryptoKey, iv);
  let encrypted = cipher.update(plainText, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export const decrypt = (encryptedText: string) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', cryptoKey, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}