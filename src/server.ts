import app from './app';
import mongoose from 'mongoose';
import { env } from './utils/validateEnv';

const PORT = env.PORT || 5000;

mongoose
  .connect(env.MONGO_URL, {})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listen in port ${PORT}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
