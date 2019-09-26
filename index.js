const express = require('express')
let app = express()

const port = 3000;

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {title: "Home"})
})
app.get('/about', (req, res) => {
  res.render('about', {title: "About"})
})
app.get('/contact', (req, res) => {
  res.render('contact', {title: "Contact"})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
