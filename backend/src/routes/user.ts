import { Router } from "express";
import { getUsersCtrl } from "../controllers/user.controller";

const router = Router();

router.get("/", getUsersCtrl);

export { router };
