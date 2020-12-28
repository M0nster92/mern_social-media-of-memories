import Ract, { useState } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from "./styles";

const Form = () => {
    const [postData, setPostData] = useState({
        creator : '',
        title : '',
        message : '',
        tags : '',
        selectedFiles : '',
    })
    const classes = useStyles();

    const handleSubmit = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form 
            autoComplete="off" 
            noValidate 
            className={classes.form}
            onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="outline" 
                fullWidth
                value = {postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
                />
                <TextField 
                name="message" 
                variant="outlined" 
                label="outline" 
                fullWidth
                value = {postData.message}
                onChange={(e) => setPostData({ ...postData, creator: e.target.message})}
                />
                <TextField 
                name="title" 
                variant="outlined" 
                label="outline" 
                fullWidth
                value = {postData.title}
                onChange={(e) => setPostData({ ...postData, creator: e.target.title})}
                />
                <TextField 
                name="tags" 
                variant="outlined" 
                label="outline" 
                fullWidth
                value = {postData.tags}
                onChange={(e) => setPostData({ ...postData, creator: e.target.tags})}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                    type="file"
                    multiple = {false}
                    onDone = {({base64}) => setPostData({...postData, selectedFiles: base64})}
                     />
                </div>

            </form>
        </Paper>
    )
};

export default Form;