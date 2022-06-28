import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/posts.js";

export const getposts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    return res.status(200).json({ postMessages });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createpost = async (req, res) => {
  const { message, selectedFile, name, creator, profileImgg } = req.body;

  const newPostMessage = new PostMessage({
    message,
    selectedFile,
    name,
    creator,
    profileImgg,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserpost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const PostbyUser = await PostMessage.find({ creator: id });
    res.status(200).json({ PostbyUser });
  } catch (error) {
    console.log(error);
  }
};

export const likepost = async (req, res) => {
  const { id, userId } = req.params;
  console.log(id);
  console.log(userId);
  try {
    // const updatedpost = await PostMessage.aggregate([
    //   {
    //     $addFields: {
    //       profileImgg: String,
    //       likes: { type: [String], default: [] },
    //       comments: { type: [String], default: [] },
    //     },
    //   },
    // ]);

    const user = await PostMessage.findOne(
      { _id: id, likes: userId },
    );

    if (user) {
      const updatedpost2 = await PostMessage.findOneAndUpdate(
        { _id: id },
        {
          $pull: {
            likes: { $in: [userId] },
          },
        }
      );
      console.log("de");
    } else {
      const updatedpost = await PostMessage.findOneAndUpdate(
        { _id: id },
        {
          $addToSet: {
            likes: userId,
          },
        }
      );
    }

    res.status(200).json({ message: "sucessfully reacted" });
  } catch (error) {
    console.log(error);
  }
};

export const comments = async (req, res) => {
  const { id, comment,name } = req.body;
  console.log(id);
  console.log(comment);
  try {
    const updatedcomments = await PostMessage.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          comments: `${name}: ${comment}`,
        },
      }
    );

    res.status(200).json({ updatedcomments, message: "sucessfully commented" });
  } catch (error) {
    console.log(error);
  }
};
