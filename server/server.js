require('dotenv').config();
const {app} = require('./express.js');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const Port = process.env.Port || 4000;
console.log(process.env.Port)

mongoose.connect(process.env.Mongo_Uri, {useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', (error)=>{console.log(error)});
db.once('open', ()=>{console.log('connected successfully to the database')});
const Item = require('./models/user.model.js');

__dirname = path.resolve();
if (process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    })
}

app.listen(Port, (err)=>{
    if(err)
    {
        console.error(err);
    }else{
        console.log(`The server is running on port ${Port}`);
    }
        
})