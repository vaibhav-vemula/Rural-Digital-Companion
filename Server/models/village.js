const mongoose = require("mongoose");

const villagSchema = new mongoose.Schema({
        village:{type:String},
        today:{type:Array},
        other:{type:Array}
  
})

const VillageTimeline = new mongoose.model('VillageTimeline',villagSchema);

module.exports = VillageTimeline;