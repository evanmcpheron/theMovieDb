const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  adult: {
    type: Boolean,
    default: false,
  },
  poster: {
    type: String,
    default: null,
  },
  backdrop: {
    type: String,
    default: null,
  },
  specs: {
    visibility: {
      type: String,
      default: 'draft',
    },
    status: {
      type: String,
      default: 'Released',
    },
    runtime: {
      type: Number,
      default: null,
    },
    productionCo: {
      type: Array,
      default: [],
    },
    keyword: {
      type: Array,
      default: [],
    },
    revenue: {
      type: Number,
      default: null,
    },
    budget: {
      type: Number,
      default: null,
    },
    originalLanguage: {
      type: String,
      default: null,
    },
    thumbUp: {
      type: Number,
      default: null,
    },
    totalVote: {
      type: Number,
      default: null,
    },
  },
  social: {
    facebook: {
      type: String,
      default: null,
    },
    twitter: {
      type: String,
      default: null,
    },
    instagram: {
      type: String,
      default: null,
    },
    website: {
      type: String,
      default: null,
    },
  },
  genre: {
    type: Array,
    default: [],
  },
  cast: {
    type: Array,
    default: [],
  },
  crew: {
    type: Array,
    default: [],
  },
  media: {
    poster: {
      type: Array,
      default: [],
    },
    backdrop: {
      type: Array,
      default: [],
    },
    video: {
      type: Array,
      default: [],
    },
  },
  recommendedMovie: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
