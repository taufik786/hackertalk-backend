require('dotenv').config()
const mongoose = require('mongoose');

const mongooseSchema = mongoose.connect(process.env.DATABASE,{
     
}).then(res => {
    console.log('DB Connected Successfully.')
}).catch(err => console.log('DB Not Connected', err))

module.exports = mongooseSchema;