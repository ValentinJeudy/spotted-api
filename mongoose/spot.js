const Mongoose = require('mongoose')

const SpotSchema = Mongoose.Schema({
  name: String,
  type: String,
  description: String,
  difficulty: String,
  location: {
    lat: Number,
    lng: Number,
    placeId: String,
    address: String
  },
  indoor: Boolean,
  media: {
    pictures: [String],
    videos: [String]
  }
}, { collection: 'spots' })

module.exports = Mongoose.model('Spot', SpotSchema)
