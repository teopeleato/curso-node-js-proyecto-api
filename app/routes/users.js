var router = require('express').Router()
const usersController = require('../controllers/usersController')

// crear un nuevo usuario, no hace falta que está autenticado
router.post('/', (req, res) => {
  usersController.create(req, res)
})

/* router.get('/search', (req, res) => {
  usersController.search(req, res)
}) */

// mostrará la lista de usuarios
// este endpoint debera ser autenticado
router.get('/', (req, res) => {
  usersController.list(req, res)
})

/* router.get('/:id', (req, res) => {
  usersController.show(req, res)
}) */

/* router.put('/:id', (req, res) => {
  usersController.update(req, res)
}) */

/* router.delete('/:id', (req, res) => {
  usersController.remove(req, res)
}) */

module.exports = router
