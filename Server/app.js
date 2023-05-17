import express from "express";
import cors from 'cors'
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import adminRoute from "./routes/adminRoute.js";
import userRoute from "./routes/userRoute.js";

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.log('Failed to connect to MongoDB:', err);
});
mongoose.set('strictQuery', true);


const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public/images',express.static('public/images'));

const port = 8080

app.get('/', (req, res) => {
    res.status(201).json("Home GET Request")
})
app.use('/',userRoute)
app.use('/admin',adminRoute)

app.listen(port, () => [
    console.log(`server connected to http://localhost:${port}`)
])
