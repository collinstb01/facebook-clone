import userInfo from "../models/userInformation.js";
import post from "../models/posts.js";

export const createuserinfo = async (req, res) => {
    const { profileImg, bio, creator,name } = req.body
    try {
        const updateInfo = new userInfo({
            profileImg, bio, creator,name
        })
        await updateInfo.save()
        res.status(200).json({updateInfo, message: "Successfully saved"})

    } catch (error) {
        console.log(error)
    }
}

export const getuserinfo = async (req, res) => {
    const { id } = req.params
    console.log(id)

    try {
      const userInfor = await userInfo.findOne({creator: id})

      if (!userInfor) {
      return  res.status(400).json({message: "No user info found"})
      }
      try {
       return res.status(200).json({userInfor, message: "Successfully gotten user info"})
      } catch (error) {
        console.log(error)
      }
       
    } catch (error) {
        console.log(error)
    }
}
export const getalluserinfo = async (req, res) => {

  try {
    const userInfor = await userInfo.find()

    try {
     return res.status(200).json({userInfor, message: "Successfully gotten all user info"})
    } catch (error) {
      console.log(error)
    }
     
  } catch (error) {
      console.log(error)
  }
}
export const updateuserinfo = async (req, res) => {
        const { profileImg, bio, creator,name } = req.body
 
        try {
          const updateInfo = await userInfo.updateOne({
            creator: creator
          }, {
            $set: {
              profileImg: profileImg,
              bio: bio,
              name: name
            }
          })
          const updatedUserProfile = await post.updateMany({
            creator: creator
          }, {
            $set: {
              profileImg: profileImg,
            }
          })
       return res.status(200).json({updateInfo, message: "Successfully updated"})

        } catch (error) {
          
        }
}