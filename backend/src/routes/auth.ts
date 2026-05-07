import { Router } from "express";
import { loginCtrl, registrerCtrl } from "../controllers/auth.controller";

const router = Router();

router.post("/register", registrerCtrl);
router.post("/login", loginCtrl);

export { router };
