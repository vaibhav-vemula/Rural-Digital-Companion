const mongoose = require("mongoose");

const adminschema = new mongoose.Schema({
        userid:{type:String},
        pass:{type:String}
})

const Admincred = new mongoose.model('Admincred',adminschema);

module.exports = Admincred;