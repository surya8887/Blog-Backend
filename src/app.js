import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//  app initialization
const app = express();

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "32kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// import routes
import userRouter from './routes/user.route.js'

//  initalition of routes
app.use('/api/v1/users',userRouter);

// http://localhost:8000/api/v1/users/signUp

export { app };
