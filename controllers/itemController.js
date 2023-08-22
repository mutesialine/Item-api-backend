const Item = require ('../models/items')

const createPostItems = (req, res)=>{
    const item = new Item({
        name:req.body.name ,
        description:req.body.description,
        price: req.body.price
       })
       item.save()
       .then(result =>{
        res.json(result)
       })
       .catch (err =>{
        console.log(err)
       })
    }


const getAllItems = (req, res)=>{
    Item.find()
    .then(result =>{
        res.json(result)
    })
    .catch(err =>{
        console.log(err)
    })
}
const getSingleItem = (req, res)=>{
    const id = req.params.id
    Item.findById(id)
    .then(result =>{
        res.json(result)
    })
    .catch(err =>{
        console.log(err)
    })
}

const updateItems= (req, res)=>{
    const id = req.params.id
    Item.findByIdAndUpdate(id , req.body)
    .then(result =>{
        res.send('updated item successful')
    })
    .catch(err =>{
        console.log(err)
    })
}

const deleteItem = (req, res)=>{
    const id = req.params.id
    Item.findByIdAndDelete(id)
    .then(result =>{
        res.send('Item deleted successful')
    })
    .catch(err =>{
        console.log(err)
    })
}

module.exports= {createPostItems , getAllItems, getSingleItem ,updateItems, deleteItem}
