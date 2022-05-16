const express = require('express')
const sequelize = require('./database/conn')
const product = require('./models/Product')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


sequelize.sync().then( result =>{
//console.log(result);
app.listen(3001)
}).catch (err =>{

    console.error(err)
})

