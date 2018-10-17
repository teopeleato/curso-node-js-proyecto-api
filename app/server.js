const express = require('express') // llamamos a Express
const app = express()
const router = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

require('./db')

/* configuración de middlewares */
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

var port = process.env.PORT || 8080 // establecemos nuestro puerto

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola clase!' })
})

// iniciamos nuestro servidor
// app.listen(port)

app.listen(port, () => {
  console.log(`Api escuchando por el puerto ${port}`)
})

console.log('API todavía no está escuchando!!!!')

module.exports = app
