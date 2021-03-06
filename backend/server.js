const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', require('./Routes/userRoutes'))
app.use('/api/tickets', require('./Routes/ticketRoutes'))

app.get('/', (req, res) => {
    res.status(201).json({message: "Hello World"})
})

app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server is listening on PORT ${PORT}`))

