import express from "express"
import { createuserinfo, getalluserinfo, getuserinfo, updateuserinfo } from "../controllers/userInfo.js"

const userInfoRouter = express.Router()

userInfoRouter.post("/createuserinfo", createuserinfo)
userInfoRouter.get("/getuserinfo/:id", getuserinfo)
userInfoRouter.patch("/updateuserinfo", updateuserinfo)
userInfoRouter.get("/getalluserinfo", getalluserinfo)

export default userInfoRouter