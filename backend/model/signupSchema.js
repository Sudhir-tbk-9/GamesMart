const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/registration")

const signupschema =   new  mongoose.Schema({


    firstname:{

        type:String,
        required:true
    },


    lastname: {

        type:String,
        required:true
    },

    email:{

        type: String,
        required: true
    },
    phone:{

        type:String,
        required:true
    }





})


const gameregistration = mongoose.model('gameregistration',signupschema)



module.exports =  gameregistration