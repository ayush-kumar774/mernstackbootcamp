var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
        {
                name: {
                        type: String,
                        required: true,
                        maxlength: 32,
                        trim: true
                },
                lastname: {
                        type: String,
                        required: false,
                        maxlength: 32,
                        trim: true
                },
                email: {
                        type: String,
                        required: true,
                        trim: true,
                        unique: true
                },

                //TODO: password

                password: {
                        type: String,
                        trim: true
                },
                
                salt: String,

                


        }
);