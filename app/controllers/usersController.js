const User = require('../models/User')

const create = (req, res) => {
  const { email, password } = req.body
  const user = new User({ email, password })
  user
    .save()
    .then(() => {
      return user.generateAuthToken()
    })
    .then(token => {
      res.header('x-auth', token).status(201).send(user)
    })
    .catch(e => {
      res.status(400).send(e)
    })
}

module.exports = {
  create
}
