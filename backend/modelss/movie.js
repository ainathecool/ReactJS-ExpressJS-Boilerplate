const mongoose = require('mongoose');  //only importing mongoose

const Schema = mongoose.Schema; //schema creating with mongoose

const movieSchema = new Schema(  //new schema ka name is movieSchema

    {
        id:{
            type: Number,
            required: true,
        },
        
        title: {
            type: String,
            required: true,
        }, //this is one column

        year: {
            type: Number,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },

        rating: {
            type: Number,
            required: true,
        },



    },
    {
        timestamps: true, //will tell konsa column kab bana
    }
);

const Movie = mongoose.model('Movie', movieSchema); //weve made it a table or a model
module.exports = Movie;