const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
// require('dotenv/config')
const layout = require('./model/modelData');

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
//mongoose connection

mongoose.connect("mongodb+srv://DEVI:mangodb123@cluster0.pa9e2gu.mongodb.net/instadevi",
    { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log('Connected')
    }).catch((err)=>{
        console.log("Error:",err)
    })
app.listen(7000, (err) => {
    if (!err) {
        console.log("server is running")
    } else {
        console.log(err)
    }
})
// app.get('/', (req, res) => {
//     res.send('Server running')
// });
app.post('/postview', (req, res) => {
    const name = req.body.name;
    const location = req.body.location;
    const likes = req.body.likes;
    const description = req.body.description;
    const PostImage = req.body.PostImage;
    const date = req.body.date;
    layout.create({
        name, location, likes, description, PostImage, date
    }).then((user) => {
        console.log(user.name, 'created successfully')
        res.send('Data Sent')
    }).catch((err) => {
        console.log(err);
    })
})
app.get('/postview', (req, res) => {
    layout.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    })
})