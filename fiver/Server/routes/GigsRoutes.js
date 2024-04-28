import multer from "multer";
import { verifyToken } from "../middlewares/AuthMiddlewares.js";
import { addGig, getGigData, getUserAuthGigs } from "../../Server/controllers/GigsControllers.js";
export const gigsRoutes = Router();
const upload = multer({ dest: "uploads/" });
gigsRoutes.post("/add", verifyToken, upload.array("imagens"), addGig)
gigsRoutes.get("/get-user-gigs", verifyToken, getUserAuthGigs)
gigsRoutes.get("/get-gig-data/:gigId", getGigData);
gigRoutes.put("/edit-gig/:gigId", verifyToken, upload.array("images"), editGig);
gigsRoutes.get("/search-gigs", searchGigs)