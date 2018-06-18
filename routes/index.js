const spotsController = require('../controllers')

module.exports = (app) => {
  app.get('/api/spots', (req, res) => {
    spotsController.getSpots(req, res)
  })

  app.get('/api/visiblespots/:corners', (req, res) => {
    spotsController.getVisibleSpots(req, res, req.params.corners)
  })

  app.post('/api/addspot/:spot', (req, res) => {
    spotsController.addSpot(req, res, req.params.spot)
  })
}
