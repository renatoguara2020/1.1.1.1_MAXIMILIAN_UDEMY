const express = require('express')
const sequelize = require('./database/conn')
//const product = require('./models/Product')
//const conn = require('./database/conn')
const User = require('./models/User')
const exphbs = require('express-handlebars')
const app = express()
port = 3000


app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.get('/users/create', (req, res) => {

  res.render('addUser')
})

app.post('/users/create', async (req, res) => {

  const name = req.body.name
  const occupation =req.body.occupation
  let newsLetter = req.body.newsLetter

  if(newsLetter === 'on'){

    newsLetter = true;
  }else{

    newsLetter = false;
  }
   console.log(req.body)
  await User.create({name, occupation, newsLetter})

  res.redirect('/')
});

app.get('/', (req, res) => {
  res.send(`<h1>Sequelize running at porta ${port}</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//  sequelize.sync().then( result =>{
//  console.log(result);
//  //app.listen(3000)
//  }).catch (err =>{

// //     console.error(err)
//  })
//app.listen(`App listening on port`);
