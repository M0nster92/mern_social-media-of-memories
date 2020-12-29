import Ract from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from "./styles";
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = () => {
    
    const classes = useStyles();
    const posts = useSelector((state) =>  state.posts);

    console.log('here', posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid 
            className={classes.mainContainer} 
            container
            alignItems="stretch"
            spacing={3}
            >
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} />
                        </Grid>
                    ))
                }
            </Grid>
            ) 
        )
};

export default Posts;