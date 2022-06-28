import express from "express";
const router = express.Router();

import { comments, createpost, getposts, getUserpost, likepost } from "../controllers/posts.js";

router.post("/", createpost);
router.get("/", getposts);
router.get("/userProfile/:id", getUserpost);
router.patch("/likepost/:id/:userId", likepost);
router.post("/comments", comments);

export default router;