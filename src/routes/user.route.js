import { Router } from "express";
import { signup } from "../controllers/user.controllers.js";

const router = Router();

router.route('/signUp').post(signup)


export default router;