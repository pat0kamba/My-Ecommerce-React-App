const Item = require('../models/user.model.js');
const {getErrorMessage} = require('../helper/db_ErrorHandler.js');

const List = async (req, res)=>{
try{

    const result = await Item.find().select('email phone');
    res.status(200).json(result);

}catch(error){
    res.status(400).json({error:getErrorMessage(error)})
}

}

const Read = async(req, res)=>{
    try{
        const item = await req.profile;
        item.hash_password = undefined;
        item.salt = undefined;
        
        res.status(200).json(item);

    }catch(err){
        res.status(400).json({error:err})

    }

}
 
const Create = async(req, res)=>{
    const post = new Item(req.body);
    console.log(post);
    try{
        
        await post.save()
       res.status(200).json({message:"successfully signed up"});

    }catch(err){
        res.status(400).json({error:err})
    }
}

const userById = async(req, res, id, next)=>{
    try{
        const item = await Item.findById(id);
        if(!item){
            res.status(400).json({error:"could not find the user"})
        }
        req.profile = item;
        next();
        
    }catch(err){
        res.status(400).json({error:err})
    }
  
}

module.exports = {List, Read,Create, userById};