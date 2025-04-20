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

//  initalition of routes

export { app };
