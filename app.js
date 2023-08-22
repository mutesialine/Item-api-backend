const express =require ('express')
const mongoose = require('mongoose')
const PORT = 3000
const app = express()

app.use(express.json())
const dbURI='mongodb+srv://aline:123456789A@cluster0.fcm6now.mongodb.net/crud?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result)=>console.log('connected to the db'))
.catch((err)=> console.log(err))

app.listen(PORT,'localHost', ()=>{
    console.log('LISTENING FOR  LOCAL HOST')
})





