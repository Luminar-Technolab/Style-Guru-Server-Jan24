require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const router = require('./routes/router')

const styleServer = express()
styleServer.use(cors())
styleServer.use(express.json())
styleServer.use(router)

const PORT = 3000 || process.env.PORT
styleServer.listen(PORT,()=>{
    console.log(`Style Guru Server started at port ${PORT} and waiting for client request`);
})

styleServer.get('/',(req,res)=>{
    res.send(`<h1>Style Guru Server started and waiting for client request!!!!</h1>`)
})