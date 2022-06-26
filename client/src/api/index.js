import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const getposts = () => API.get('/posts');
export const createpost = (newPost) => API.post('/posts', newPost);
export const getUserpost = (id) => API.get(`/posts//userProfile/${id}`, id);
export const likepost = ({id, userId}) => API.patch(`/posts/likepost/${id}/${userId}`, {id, userId});
export const comments = (data) => API.post(`/posts/comments`, data);
// export const updatepost = (formData) => API.post('/posts/', formData);

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);

export const createuserinfo = (info) => API.post("/userInfo/createuserinfo", info)
export const getuserinfo = (id) => API.get(`/userInfo/getuserinfo/${id}`, id)
export const updateuserinfo = (info) => API.patch(`/userInfo/updateuserinfo`, info)
export const getalluserinfo = () => API.get(`/userInfo/getalluserinfo`)