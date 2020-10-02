const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  profile: {
    type: String,
    default: 'defaultProfile.png'
  } /* 234kj23lkjsdijsdc.jpg */,
  name: {
    first: {
      required: [true, "Please include a first name"],
      trim: true,
      default: null,
      max: [50, "The first name cannot be longer than 50 character"] /* Tom */,
    },
    last: {
      required: [true, "Please include a last name"],
      default: "Doe",
      trim: true,
      max: [
        50,
        "The last name cannot be longer than 50 character",
      ] /* Holland */,
    },
  },
  professionalInfo: {
    knownFor: {
      type: String,
      default: null
    } /* actor */,
    tv: {
      type:Array,
      default: []
    } /* [123 , 543, 234, 5558] ID WILL REFER TO THE SPECIFIC SHOW OBJECT */,
    movie: {
      type: Array,
      default: []
    } /* [123 , 543, 234, 5558] ID WILL REFER TO THE SPECIFIC MOVIE OBJECT */,
    thumbUp: {
      type: Number,
      default: null
    } /* 34 */,
    totalVote: {
      type:Number,
      default: null
    }, /* 41 RATING WILL BE THUMBUP DIVIDED BY TOTAL VOTE. THIS EXAMPLE IS: 34 / 41 = 82% APPROVAL */,
  },
  personalInfo: {
    bio: {
      type: String,
      default: null
    } /* Paragraph long bio */,
    social: {
      facebook: {
        type: String,
        default: null
      },
      twitter: {
        type: String,
        default: null
      },
      instagram: {
        type: String,
        default: null
      },
      website: {
        type: String,
        default: null
      }
    },
    birthYear: {
      type: Number,
      default: null
    } /* 1991 */,
    placeOfBirth: {
      type: String,
      default: null
    } /* London, England */,
    alive: {
      type: Boolean,
      default: true
    } /* true */,
    deathYear: {
      type: Number,
      default: null
    } /* 1994 */,
    gender: {
      type: String,
      default: null
    } /* male */,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Person", PersonSchema);
