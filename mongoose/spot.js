const Mongoose = require('mongoose')

const SpotSchema = Mongoose.Schema({
  name: String,
  localisation: {lat: Number, lng: Number},
  description: String,
}, { collection: 'spots' })

module.exports = Mongoose.model('Spot', SpotSchema)
