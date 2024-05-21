import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";
import { deleteTodo, newTodo, updateTodo, updatestatus } from "../controllers/todo.js";

const router = Router();

router.route("/new").post(auth , newTodo)
router.route("/:todoId").delete(auth,deleteTodo).patch(auth , updateTodo).put(updatestatus)


export  default router