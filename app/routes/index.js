const express = require('express')
const router = express.Router()
const cervezasRouter = require('./cervezas')
const cursosRouter = require('./cursos')

router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

router.use('/cervezas', cervezasRouter)
router.use('/cursos', cursosRouter)
module.exports = router
