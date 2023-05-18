import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import adminRoute from './routes/adminRoute.js';
import userRoute from './routes/userRoute.js';
import providerRoute from './routes/providerRoute.js';

dotenv.config();

const { MONGODB_URI, PORT } = process.env;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB:', err);
  });

mongoose.set('strictQuery', true);

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public/images', express.static('public/images'));

app.get('/', (req, res) => {
  res.status(201).json('Home GET Request');
});

app.use('/', userRoute);
app.use('/admin', adminRoute);
app.use('/provider', providerRoute);


app.listen(PORT, () => {
  console.log(`Server connected to http://localhost:${PORT}`);
});
