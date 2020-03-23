const mongoose = require('mongoose')

//Schema
const Schema = mongoose.Schema
const BlogSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
})

const BlogPost = mongoose.model('BlogPost', BlogSchema)

module.exports = BlogPost;