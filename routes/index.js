const spotsController = require('../controllers')

module.exports = (app) => {
  app.get('/api/spots', (req, res) => {
    spotsController.getSpots(req, res)
  })

  app.get('/api/visiblespots/:corners', (req, res) => {
    spotsController.getVisibleSpots(req, res, req.params.corners)
  })

  app.put('/api/addspot/:spot', (req, res) => {
    console.log('req.params.spot ===> ', require('util').inspect(req.params.spot, { colors: true, depth: 4 }))
    spotsController.addSpot(req, res, req.params.spot)
  })

  app.post('/api/updatespot/:spot', (req, res) => {
    spotsController.updateSpot(req, res, req.params.spot)
  })

  app.post('/api/deletespot/:spot', (req, res) => {
    spotsController.deleteSpot(req, res, req.params.spot)
  })
}
