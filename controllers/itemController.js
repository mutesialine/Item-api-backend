const Item = require ('../models/items')

const itemCreatePost = (req, res)=>{
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


module.exports= {itemCreatePost ,getAllItems}
