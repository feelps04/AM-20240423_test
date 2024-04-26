import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authRoutes } from "./routes/authRoutes.js";
import cookieParser from "cookie-parser"


dotenv.config();

const app = express();
const port = process.env.PORT;
const origin = process.env.Public_URL;
console.log({ origin });

app.use(
    cors({
        origin: [process.env.PUNLIC_URL],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    })
);


app.use("/uplods/profiles", express.static("uploads/profiles"))
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoutes)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});