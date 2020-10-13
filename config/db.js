const mongoose = require('mongoose');

const connectMongo = async () => {
    try{
       await mongoose.connect(MONGOURI,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log("DB connected");
    }
    catch(e)
    {
        console.log(e);
        throw e;
    }
}

module.exports = connectMongo;
