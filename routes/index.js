const spotsController = require('../controllers')

module.exports = app => {
  app.get('/api/spots', (req, res) => {
    spotsController.getSpots(req, res)
  })

  app.get('/api/visiblespots/:corners', (req, res) => {
    spotsController.getVisibleSpots(req, res, req.params.corners)
  })

  app.put('/api/addspot/:spot', (req, res) => {
    spotsController.addSpot(req, res, req.params.spot)
  })

  app.put('/api/updatespot/:spot', (req, res) => {
    console.log(
      'req.params ===> ',
      require('util').inspect(req.params, { colors: true, depth: 2 })
    )
    spotsController.updateSpot(req, res, req.params.spot)
  })

  app.put('/api/deletespot/:spot', (req, res) => {
    spotsController.deleteSpot(req, res, req.params.spot)
  })
}
