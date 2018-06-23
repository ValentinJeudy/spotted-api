const spotsController = require('../controllers')

module.exports = (app) => {
  app.get('/api/spots', (req, res) => {
    spotsController.getSpots(req, res)
  })

  app.get('/api/visiblespots/:corners', (req, res) => {
    console.log('=============> GET VISIBLE SPOT ROUTE <================')
    spotsController.getVisibleSpots(req, res, req.params.corners)
  })

  app.get('/api/addspot/:spot', (req, res) => {
    console.log('=============> ADD SPOT ROUTE <================')
    console.log('req.params.spot ===> ', require('util').inspect(req.params.spot, { colors: true, depth: 2 }))
    spotsController.addSpot(req, res, req.params.spot)
  })

  app.post('/api/updatespot/:spot', (req, res) => {
    spotsController.updateSpot(req, res, req.params.spot)
  })

  app.post('/api/deletespot/:spot', (req, res) => {
    spotsController.deleteSpot(req, res, req.params.spot)
  })
}
