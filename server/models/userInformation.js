import mongoose from "mongoose"

const userInfoScehma = mongoose.Schema({
    profileImg: {
        type: String
    },
    bio: {
        type: String
    },
    creator: {
        type: String
    }, 
    name: {
        type: String,
        required: true
    }
})

var userInfo = mongoose.model('userInfo', userInfoScehma);

export default userInfo;