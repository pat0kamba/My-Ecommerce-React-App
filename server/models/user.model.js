const mongoose = require('mongoose');
const crypto = require('crypto');
const Promise = require("bluebird");
Promise.promisifyAll(require("mongoose"));

const itemSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:"User already exist please type new email",
        trim:true,
        required:"Email is required"
    },
    phone:{
        type:Number
    },
    badge:{
        type:Number
    },
    wishlist:[{
        name:String,
        price:Number,
        imageUrl:String, 
    }],
    cart:[{
        name:String,
        quantity:Number,
        price:Number,
        totalPrice:Number,
        size:String,
        imageUrl:String,
        

    }],
    salt:String,
    hash_password:{
        type:String, 
        required:"password is required"
    }
},
{timeStamps:true}
);

itemSchema.virtual('password')
.get(function(){
    return this._password;
})
.set(async function(password){
    this._password = password;
    this.salt=this.makeSalt();
    this.hash_password= this.encryptedPassword(password);
});

itemSchema.path('hash_password').validate(function(v){
    if(this._password && this._password < 6){
        return this.invalidate('password', "password need to be a least 6 characters")
    }
    if(this.isNew && !this._password)
    {
        return this.invalidate('password', 'password is required')
    }
}, null);

itemSchema.methods = {
    authenticate: function(text){
        console.log('this is the encrypted password',this.encryptedPassword(text));
        console.log('this is the hashed password',this.hash_password);
        return this.encryptedPassword(text) === this.hash_password;
    },

    encryptedPassword: function(password){
        if(!password)
        {
            return ""
        }

        try{
            return crypto.createHmac('sha1', this.salt)
                        .update(password)
                        .digest('hex')
                        
                        

        }catch(err){
            return ""
        }

    }, 
    makeSalt: function()
    {
        return (Math.round(new Date().valueOf() * Math.random()))+" "
    }
}



module.exports = mongoose.model('Item', itemSchema);
