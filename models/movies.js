const mongoose = require("mongoose");
const Joi = require("joi");
const joiObjectid = require("joi-objectid");

const movieSchema = new mongoose.Schema({
  plot: {
    type: String,
    required: true
  },
  genres: [
    {
      type: String,
      required: true,
    }
  ],
  runtime: {
    type: Number
  },
  cast: [
    {
      type: String,
      required: true
    }
  ],
  num_mflix_comments: {
    type: Number,
    default: 0
  },
  poster: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },


  lastupdated: {
    type: String
  },
  languages: [{
    type: String,
    required: true
  }],
  released: {
    $date: {
      $numberLong: {
        type: String

      }
    }
  },

  directors: [{
    type: String,
    required: true
  }],
  rated: {
    type: String
  },
  awards: {
    wins: {
      type: Number
    },
    nominations: {
      type: Number
    },
    text: {
      type: String
    }
  },
  year: {
    type: Number
  },
  imbd: {
    rating: {
      type: Number
    },
    votes: {
      type: Number
    },
    id: {
      type: Number
    }
  },

  countries: [{
    type: String
  }],
  type: {
    type: String
  },
  tomatoes: {
    viewer: {
      rating: {
        type: Number
      },
      numReviews: {
        type: Number
      },
      meter: {
        type: Number
      }
    }
  },

  meter: {
    type: Number
  },
  dvd: {
    $date: {
      $numberLong: {
        type: String
      }
    },
    lastUpdated: {
      $date: {
        $numberLong: {
          type: String
        },
      }
    }
  }


})

const validateMovie = Joi.object({
  plot: Joi.string().required(),
  genres: Joi.string().required(),
  runtime: Joi.number(),
  cast: Joi.number().required(),
  num_mflix_comments: Joi.number(),
  poster: Joi.string(),
  title: Joi.string().required(),
  lastupdated: Joi.number(),
  languages: Joi.string().required(),
  released: Joi.string(),
  directors: Joi.string().required(),
  rated: Joi.string().required(),
  awards: Joi.string(),
  year: Joi.number(),








});

const Movie = mongoose.model("Movies", movieSchema)

exports.Movie = Movie;
exports.validateMovie = validateMovie