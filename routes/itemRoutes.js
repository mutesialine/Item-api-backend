const express = require('express')
const {createPostItems, getAllItems, getSingleItem} = require ('../controllers/itemController')
const router = express.Router()

router.post('/', createPostItems)
router.get('/', getAllItems)
router.get('/:id',getSingleItem)

module.exports= router
