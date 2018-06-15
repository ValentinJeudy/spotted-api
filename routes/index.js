const spotsController = require('../controllers')

module.exports = (app) => {
  app.get('/spots', (req, res) => {
    spotsController.getSpots(req, res)
  })
}
