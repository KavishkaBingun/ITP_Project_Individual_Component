//importing the Mongoose library using Node.js
const mongoose = require('mongoose');
//Creating schema variable to assign the value of schema property in MongoDB
const Schema = mongoose.Schema;

//creating tableSchema object of Schema variable to create documents in MongoDB
const tableSchema = new Schema({
//properties in the document in MongoDB
    name : {
        type : String,
        require : true //ckeck the attribute has a value in the database(backend validation)
    },
    email : {
        type : String,
        require : true 
    },
    phone : {
        type : String,
        require : true 
    },
    address : {
        type : String,
        require : true 
    },
    nic : {
        type : String,
        require : true 
    },
    
    noOfTables : {
        type : Number,
        require : true 
    },
    type : {
        type : String,
        require : true 
    },
    decoration : {
        type : String,
        require : true 
    },
    date : {
        type : String,
        require : true 
    },
    time : {
        type : String,
        require : true 
    },

    
    payment : {
        type : String,
        require : true 
    },
})

//pass data into database

const table = mongoose.model("tables",tableSchema);

module.exports = table;
