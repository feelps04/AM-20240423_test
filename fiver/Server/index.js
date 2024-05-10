import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authRoutes } from "./routes/authRoutes.js";
import cookieParser from "cookie-parser"
import { authRoutes } from "./routes/authRoutes.js";
import { authRoutes } from "./routes/GigsRoutes.js";

dotenv.config();

// Importe o módulo 'events'
const EventEmitter = require('events');

// Crie uma instância do EventEmitter
const emitter = new EventEmitter();

// Aumente o limite máximo de ouvintes
emitter.setMaxListeners(20); // Defina o número conforme necessário

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
app.use("/uplods", express.static("uploads"))
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoutes)
app.use("/api/gigs", gigsRoutes)
app.use("/api/order", ordersRoutes)


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});