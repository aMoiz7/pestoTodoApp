import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";
import { alltodos, deleteTodo, newTodo, updateTodo, updatestatus } from "../controllers/todo.js";

const router = Router();

router.route("/new").post(auth , newTodo)
router.route("/:todoId").delete(auth,deleteTodo).patch(auth , updateTodo).put(updatestatus)
router.route("/all").get(auth , alltodos)



export  default router