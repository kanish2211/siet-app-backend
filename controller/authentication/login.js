const User = require("../../models/userSchema")
const {check,validationResult}=require("express-validator");
const jwt=require('jsonwebtoken')
const expressJwt =require("express-jwt")


exports.Login = async (req, res, next) => {
    
    const errors = validationResult(req)
    const {email,password}=req.body

    if (!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    User.findOne({email},(err,user)=>{
        console.log(user,err);
        if(err || !user){
            res.status(400).json({
                error:"Email id does not exist"
            })   
        }
        if (password!=user.password){
            return res.status(401).json({
                error:"Password incorrect"
            })
        }

        const token =jwt.sign({_id:user._id,userType:user.usertype },"secret")

        res.cookie("token",token,{expire:new Date()+9999})

        const{_id,name,email,usertype}=user;
        return res.json({
            token,user:{_id,name,email,usertype}
        })
    })
    
};
