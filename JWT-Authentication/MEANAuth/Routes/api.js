const express = require('express');
const router = express.Router()
const jwt = require ('jsonwebtoken')


router.get('/', (req, res) => {
    res.send('From API route')
})

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized Request..!!')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized Request..!!')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized Request..!!')
    }
    req.userId = payload.subject
    next()
}

router.get('/events', (req, res) => {
let events = [
    {
        "_id": '1',
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2020-05-02T18:25:43.5112"
    },
    {
        "_id": '2',
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2020-05-02T18:25:43.5112"
    },
    {
        "_id": '3',
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2020-05-02T18:25:43.5112"
    },
    {
        "_id": '4',
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2020-05-02T18:25:43.5112"
    },
    {
        "_id": '5',
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2020-05-02T18:25:43.5112"
    },
]
res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
    let events = [
        {
            "_id": '1',
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2020-05-02T18:25:43.5112"
        },
        {
            "_id": '2',
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2020-05-02T18:25:43.5112"
        },
        {
            "_id": '3',
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2020-05-02T18:25:43.5112"
        },
        {
            "_id": '4',
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2020-05-02T18:25:43.5112"
        },
        {
            "_id": '5',
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2020-05-02T18:25:43.5112"
        },
    ]
    res.json(events)
    })

module.exports = router;