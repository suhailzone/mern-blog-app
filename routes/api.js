const express = require('express')
const BlogPost = require('../models/blogPosts')

const router = express.Router()

router.get('/get', (req, res) => {
    BlogPost.find({ })
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

router.post('/save', (req, res) => {
    const data = req.body
    const newPost = new BlogPost(data)
    newPost.save(error => {
        if(error){
            res.status(500).json({msg: "Error occured"})
            return
        }else{
            return res.json({msg: "Data Received"})
        }
    })
})

module.exports = router