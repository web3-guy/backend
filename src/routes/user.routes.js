import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

/* When app.js passes the control here, we define what type of requests we will handle
Here we have defined post requests will be handled
So when "/users" is hit app.js passes the control here, and if it is a post request which hits "/register"
then the controller "registerUser" takes effect. */
const router = Router()
router.route("/register").post(registerUser)


export default router