require('dotenv').config();
const Jwt = require('jsonwebtoken');
const {expressjwt:jwt} = require('express-jwt');
const Item = require('../models/user.model.js');

const signIn = async (req, res)=>{
    try{
        const user = await Item.findOne({'email':req.body.email} );
        console.log("Inside the signin function"); 
        console.log(user);
        console.log(req.body);
        if(!user)
        {
            
            return res.status(400).json({error:"User not found"});

        }
        console.log(user.authenticate(req.body.password));

        if(!user.authenticate(req.body.password))
        {
            return res.status(400).json({error:"User is not authenticated"});
        }

        const token = Jwt.sign({id:user._id}, process.env.SECRET);

        res.cookie('t', token, {maxAge:900000});

       return res.status(200).json({
            token,
            item:{
                wishlist:user.wishlist,
                cart:user.cart,
                badge:user.badge
            }
        })

    }catch(err){
        console.log(err);
        return res.status(400).json({Error:"User could not sign in"})
        
    }

}

const signOut = async (req, res)=>{
    clearCookie('t');
    res.status(200).json({message:"User signed out successfully"});

}

const hasAuthorization = (req, res, next)=>{
    const authorize = req.profile && req.auth && req.profile.id === req.auth.id;
    if(!authorize)
    {
        res.status(401).json({message:"user has not authorization"});
    } 
    next();

}

const requireSignIn = jwt({
    secret:process.env.SECRET,
    algorithms:["HS256"],
    requestProperty:'auth'
})
    

module.exports = {signIn, signOut, hasAuthorization, requireSignIn};