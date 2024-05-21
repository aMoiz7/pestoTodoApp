import Router from "express";
import { login, signUp } from "../controllers/user.js";
import { upload } from "../utils/multer.js";

const router = Router();

router.route("/signup").post(upload.fields([{
    name: 'avatar', // Corrected: 'avatar' should be a string
    maxCount: 1
}]), signUp); // Corrected: Use 'signUp' instead of 'signtype'

router.route("/login").post(login)
export default router;
