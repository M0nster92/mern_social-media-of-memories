import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(201).json(postMessages);
    } catch(error){
        res.status(201).json({message : error.nessage})
;    }
}

export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new PostMessage(body);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error){
        res.status(201).json({message : error.message});
    }
}