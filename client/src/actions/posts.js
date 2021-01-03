import * as api from '../api';

export const getPosts = () => async dispatch => {
    console.log('Action get posts');

    try{
        const { data } = await api.fetchPosts();

        dispatch({type : 'FETCH_ALL', payload: data });
    } catch (error){
        console.log( error);
    }
}

export const createPost = (post) => async dispatch => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type : 'CREATE', payload : data });
    }catch(error){
        console.log(error);
    }
}

export const updatePost = (id, post) => async dispatch => {
    console.log(post);
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({type: 'UPDATE', payload : id})
    } catch (error){
        console.log(error);
    }
}

export const deletePost = (id) => async dispatch => {
    console.log("Delete action is triggering", id);
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload : id})
    } catch (error){
        console.log(error);
    }
}