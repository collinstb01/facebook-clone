import express from "express";
import mongoose from "mongoose";

import PostMessage from "../models/posts.js";
import userInfo from "../models/userInformation.js";

export const getposts = async (req, res) => {
  try {
    // const postMessages = await PostMessage.aggregate(
    //   [
    //     {$sample: {size: 50}}
    //   ]
    // );
    const postMessages = await PostMessage.find()

    return res.status(200).json({ postMessages });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createpost = async (req, res) => {
  const { message, selectedFile, name, creator, profileImg } = req.body;

  const postMessages = new PostMessage({
    message,
    selectedFile,
    name,
    creator,
    profileImg,
  });

  try {
    await postMessages.save();

    res.status(201).json({postMessages});
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

export const updatepost = async (req, res) => {
      const {postid} = req.params
      const {title} = req.body
      console.log(title, postid)

      try {
        const updatesuccess = await PostMessage.updateOne(
          {_id: postid},
          {
            $set: {
              message: title
            }
          }
        )
        console.log("dd")
        const postMessages = await PostMessage.find()

        res.status(200).json({message: "successfully updated", postMessages})
      } catch (error) {
        console.log(error)
      }
}

export const likepost = async (req, res) => {
  const { id, userId, creator, name } = req.params;
  console.log(id);
  console.log(userId);
  try {

    const user = await PostMessage.findOne(
      { _id: id, likes: userId },
    );

    if (user) {
      const updatedpost2 = await PostMessage.updateOne(
        { _id: id },
        {
          $pull: {
            likes: { $in: [userId] },
          },
        }
      );
      await userInfo.updateOne(
        {creator: creator },
        {
          $push: {
            notification: `${name} liked your post`
          }
        }
      )
      
      console.log("de");
      const postMessages = await PostMessage.find()
    res.status(200).json({ message: "sucessfully reacted",postMessages });

    } else {
      const updatedpost = await PostMessage.updateOne(
        { _id: id },
        {
          $addToSet: {
            likes: userId,
          },
        }
      );

      const postMessages = await PostMessage.find()
      res.status(200).json({ message: "sucessfully reacted",postMessages });

    }

  } catch (error) {
    console.log(error);
  }
};

export const comments = async (req, res) => {
  const { id, comment,name } = req.body;
  console.log(id);
  console.log(comment);
  try {
    const updatedcomments = await PostMessage.updateOne(
      { _id: id },
      {
        $push: {
          comments: `${name}: ${comment}`,
        },
      }
    );
      const postMessages = await PostMessage.find()
    res.status(200).json({ updatedcomments, message: "sucessfully commented",postMessages });
  } catch (error) {
    console.log(error);
  }
};

export const deletepost = async () => {
      const {_id} = req.params
  try {
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).json({message: "cant find post"})
    
    const updateddpost = await PostMessage.deleteOne({_id: _id})

    return res.status(200).json({message: "Deleted successfully"})
  } catch (error) {
    console.log(error)
  }
}