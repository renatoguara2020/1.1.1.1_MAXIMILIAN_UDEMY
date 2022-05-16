const express = require('express')
const sequelize = require('./database/conn')
//const product = require('./models/Product')
const conn = require('./database/conn')
const User = require('./models/User')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000


app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


conn.sync().then( result =>{
console.log(result);
app.listen(3000)
}).catch (err =>{

    console.error(err)
})

