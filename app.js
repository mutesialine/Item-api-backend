const express =require ('express')
const mongoose = require('mongoose')
require('dotenv').config()

const itemRoutes = require('./routes/itemRoutes')
const PORT = 3000
const app = express()


app.use(express.json())
const dbURI = process.env.dbURI;
console.log(dbURI)
mongoose.connect(dbURI)
.then((result)=>console.log('connected to the db'))
.catch((err)=> console.log(err))

app.listen(PORT,'localHost', ()=>{
    console.log('LISTENING FOR  LOCAL HOST')
})

app.use('/items', itemRoutes )





