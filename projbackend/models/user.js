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
                }

        }
);