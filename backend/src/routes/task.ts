import { Router } from "express";
import { addTask, getTask, deleteTask, getTasks, updateTask } from "../controllers/task.controller";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get("/", checkJwt, getTasks);
router.get("/:id", getTask);
router.post("/", checkJwt, addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export { router };
