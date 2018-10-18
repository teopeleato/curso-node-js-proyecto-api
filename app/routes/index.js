const express = require('express')
const router = express.Router()
const cervezasRouter = require('./cervezas')
const usersRouter = require('./users')
const cursosRouter = require('./cursos')

router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

router.use('/cervezas', cervezasRouter)
router.use('/cursos', cursosRouter)
router.use('/users', usersRouter)
module.exports = router
