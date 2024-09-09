const express = require('express')
const app = express()
const register = require('./routes/routes')
const cors = require('cors')


app.use(express.json())


const PORT = 5011


app.use(cors({origin:'  http://127.0.0.1:5173'}))


app.use('/api',register)




app.listen(PORT,()=>{

    console.log(`server is running succesfuly on ${PORT}`)
})



