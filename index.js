const express = require('express')
let app = express()

const port = 3000;

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('home')
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
