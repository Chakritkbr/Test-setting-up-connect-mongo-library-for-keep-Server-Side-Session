import { cleanEnv } from 'envalid';
import { port, str } from 'envalid/dist/validators';

export const env = cleanEnv(process.env, {
  MONGO_URL: str(),
  PORT: port(),
  SESSION_SECRET: str(),
});
