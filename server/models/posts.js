import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    message: String,
    name: String,
    selectedFile: String,
    creator: String,
    likes: {
        type: [String],
        default: [],
    },
    comments: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    profileImgg: {
        type:String
    }
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;