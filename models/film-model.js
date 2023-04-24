const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: {
      type: String,
      default:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    description: String,
    showtimes: [String]
  },
  { timestamps: true }
);

const movieModel = model('Movie', movieSchema);

module.exports = movieModel;
