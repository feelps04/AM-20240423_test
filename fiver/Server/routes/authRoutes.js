import { Router } from "express";
import { signUp } from "../controllers/AuthController"
import { verifyToken } from "../middlewares/AuthMiddlewares";
import multer from "multer"

const authRoutes = Router();
const upload = multer({ dest: "uploads/profiles" })

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/get-user-info", verifyToken, getUserInfo);
authRoutes.post("/set-user-info", verifyToken, setUserInfo);
authRoutes.post("/set-user-image", verifyToken, upload.single("imagens"), setUserImage);

export default authRoutes