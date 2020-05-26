const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user') 
const cors = require('cors')
const jwt = require ('jsonwebtoken')

mongoose.connect('mongodb://localhost:27017/eventsdb')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not Connect to MongoDB', err));

const PORT = 3600;
const api = require('./Routes/api')

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.use('/api', api)
app.get('/', (req, res) => {
    res.send('Hello')
})



app.post('/register', (req, res) => {
    // let userData = req.body
    let user = new User({email: req.body.email, password: req.body.password})
    user.save((error, registeredUser) => {
        if(error){
            console.log(error)
        }else{
            let payload = { subject : registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

app.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log(error)
        }else{
           if(!user){
               res.status(401).send("Invalid Email Address")
        }else{
            if(user.password !== userData.password){
                res.status(401).send('Invalid Password..!!')
            }else{
                let payload = { subject : user._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
            }
        }
    }
})
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})