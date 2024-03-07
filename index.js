const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(port, () => {
  console.log(`Your app is running at localhost:${port}`)
});
