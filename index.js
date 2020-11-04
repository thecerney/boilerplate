const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://cerney:qwer1234@boilerplate.xs9py.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then( () => console.log("MongoDB Conntected..."))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!한글도 잘되는 UTF-8 파일이다.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})