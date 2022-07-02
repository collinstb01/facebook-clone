import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRouter from "./routes/auh.js";
import postRouter from "./routes/posts.js";
import userInfoRouter from './routes/userInfo.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/user", userRouter);
app.use("/posts", postRouter);
app.use("/userInfo", userInfoRouter);

app.use("/", (req, res) => {
    res.send("App running")
})

const CONNECTION_URL = 'mongodb+srv://jayden:jayden38400@cluster0.tir2o.mongodb.net/mySecondDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);