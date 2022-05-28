import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const getposts = () => API.get('/posts');
export const createpost = (newPost) => API.post('/posts', newPost);
export const getUserpost = (id) => API.get(`/posts//userProfile/${id}`, id);
// export const updatepost = (formData) => API.post('/posts/', formData);

export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData);