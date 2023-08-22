const express = require('express')
const {itemCreatePost, getAllItems} = require ('../controllers/itemController')
const router = express.Router()

router.post('/', itemCreatePost)
router.get('/', getAllItems)

module.exports= router
