const mongoose = require("mongoose");

module.exports = {
    database_connect: async () => {
        mongoose.set('strictQuery', false) 
        await mongoose.connect(`mongodb+srv://${process.env.database_user}:${process.env.database_password}@paginacachingan.fceo8qx.mongodb.net/test`);
    }
}