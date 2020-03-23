const express = require('express')
const morgan  = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes/api')

const app = express()
const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_practise', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(morgan('tiny'))

app.use('/', routes)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT, console.log(`Server is running at ${PORT}`))