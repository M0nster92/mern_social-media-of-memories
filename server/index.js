import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/posts.js';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("Hello from memory mern backend");
})

app.use(bodyParser.json({ limit : "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true}))
app.use(cors());
app.use('/posts', router);

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true})
.then(() => app.listen(PORT, () => console.log(`server is running on ${PORT}`)))
.catch((error) => console.log(error))

mongoose.set('useFindAndModify', false);