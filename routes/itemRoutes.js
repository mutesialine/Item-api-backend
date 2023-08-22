const express = require('express')
const {createPostItems, getAllItems, getSingleItem, updateItems} = require ('../controllers/itemController')
const router = express.Router()

router.post('/', createPostItems)
router.get('/', getAllItems)
router.get('/:id',getSingleItem)
router.put('/:id',updateItems)

module.exports= router
