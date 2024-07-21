'use strict'
const mongoose = require('mongoose');
const {countConnect} = require('../helpers/check.connect');
const connectString = 'mongodb://localhost:27017/shopDev'

class Database{
    constructor(){
        this.connect();

    }
    // connect
    connect(type='mongodb'){
        // dev env
        if (1===1){
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true});
        }

        mongoose.connect(connectString)
        .then(_ => {
            console.log('Connected mongoDB success');
            countConnect();
        })
        .catch(err => console.log('Error connect!', err));
    }
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;console.log('hehehehhehe');