import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

/* When app.js passes the control here, we define what type of requests we will handle
Here we have defined post requests will be handled
So when "/users" is hit app.js passes the control here, and if it is a post request which hits "/register"
then the controller "registerUser" takes effect. */
const router = Router()
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)


/* secured routes */
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/get-current-user").post(verifyJWT, getCurrentUser)
router.route("/change-password").post(verifyJWT, changeCurrentPassword)

export default router