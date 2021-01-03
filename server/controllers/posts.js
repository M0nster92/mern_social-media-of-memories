import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

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

export const updatePost = async (req, res) => {
    const { id : _id } = req.params;
    const post = req.body;

    console.log(post.message, post.title, post._id);
    
    await PostMessage.findOneAndUpdate({"_id": _id}, req.body , {new : true}).exec()
    .then((doc) => {
        res.json(doc);
    })
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;

    console.log(_id);

    await PostMessage.findOneAndDelete({"_id":_id}).exec()
    .then(doc => {
        if(doc){
            //console.log(doc);
            res.json({message : 'Post Deleted' })
        }
    })
}