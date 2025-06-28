import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();

// Cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


//routes import 

import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)

/* Notes
Previously we were directly using routes in the app.js by using app.get() etc
Now we have to use a middleware to pass the control to the userRouter
Whenever /users is hit the control will be passed to userRouter
Whatever is defined in userRouter will be executed ahead.
*/
export {app};