const express = require("express");
const router = express.Router();
const firebase = require ("firebase")
const validator = require('fnbpasswordvalidator')

const options ={
    prohibitedWords:['password','123'],
    min:8,
    numbers:false,
    uppercase:true,
    specialCharacter:false,
}

router.post('/users',(req,res) => {
    console.log(req.body);
    let {email,password} = req.body


let details = validator.validate(password,options)
if (!details.valid) {
    res.status(422).json({message: details.message})
}

    firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(error => console.log(error))
  })


  module.exports = router