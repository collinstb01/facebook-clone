import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/posts.js';

const router = express.Router();

export const getposts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createpost = async (req, res) => {
    const { message, selectedFile, name, creator } = req.body;

    const newPostMessage = new PostMessage({ message, selectedFile, name, creator })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getUserpost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({ message: "User doesn't exist" });
    }
    const PostbyUser = await PostMessage.find({ creator: id });
    res.status(200).json(PostbyUser);
};