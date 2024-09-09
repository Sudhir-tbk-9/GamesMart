const model = require('../model/signupSchema')
const bcrypt = require('bcrypt')



const  signup = async(req,res,next)=>{


const {firstname,lastname,email,phone} = req.body


if(!firstname || !lastname|| !email ||!phone){

   return  res.json({message:"please enter all the required field"})
}



try{


    const userexist =   await  model.findOne({email:email})


    if(userexist)  res.send("user already exist")




   const  signup =   await  new model({firstname,lastname,email,phone})







    res.json({success:true,messsage:signup})
    console.log("user created")



    




    

}


catch(error){
res.send("error occured")

}


}



module.exports = signup