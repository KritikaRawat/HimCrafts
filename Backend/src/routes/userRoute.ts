import express from "express";
import { deleteUser, getAllUsers, getOneUser, newUser } from "../controllers/userCon.js"; 
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

//route: /api/v1/user/new
app.post("/new", newUser);

//route: /api/v1/user/all
app.get("/all", adminOnly, getAllUsers);

//route: /api/v1/user/dynamicID
app.get("/:id", getOneUser);
app.delete("/:id", adminOnly,deleteUser);


export default app;
