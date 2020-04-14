const mongoose = require("mongoose");
const {
    Schema
} = mongoose;

const CardSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

// Export
module.exports = mongoose.model('Card' , CardSchema);