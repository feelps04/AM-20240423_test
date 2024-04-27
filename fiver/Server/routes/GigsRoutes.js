import multer from "multer";
import { verifyToken } from "../middlewares/AuthMiddlewares.js";
import { addGig } from "../../Server/controllers/GigsControllers.js";
export const gigsRoutes = Router();
const upload = multer({ dest: "uploads/" });
gigsRoutes.post("/add", verifyToken, upload.array("imagens"), addGig)