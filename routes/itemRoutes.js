const express = require('express')
const {itemCreatePost} = require ('../controllers/itemController')
const router = express.Router()

router.post('/', itemCreatePost)

module.exports= router
