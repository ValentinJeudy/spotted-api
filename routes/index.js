const spotsController = require('../controllers')

module.exports = (app) => {
  app.get('/api/spots', (req, res) => {
    spotsController.getSpots(req, res)
  })

  app.get('/api/spots/:corner1/:corner2', (req, res) => {
    spotsController.getVisibleSpots(req, res, req.params.corner1, req.params.corner2)
  })
}
