const express = require(`express`)
const app = express()
const cookies = require("cookies")
const rootRoutes = require(`./routes/root-routes`)

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(cookies.express('a', 'b', 'c'))

app.use(express.static(`${__dirname}/img`))

app.use('/', rootRoutes)

const port = 4444;
app.listen(port, () => console.log(`Server Is Live On Port ${port}`))