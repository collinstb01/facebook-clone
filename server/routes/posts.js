import express from "express";
const router = express.Router();

import { createpost, getposts, getUserpost } from "../controllers/posts.js";

router.post("/", createpost);
router.get("/", getposts);
router.get("/userProfile/:id", getUserpost);

export default router;