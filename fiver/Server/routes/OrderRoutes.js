import { Router } from "express";

import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
    addOrder
} from "../controllers/OrdersControllers.js";

export const orderRoutes = Router();

orderRoutes.post("/create", verifyToken, addOrder);