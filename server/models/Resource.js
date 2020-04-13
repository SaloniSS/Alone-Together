const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    url: {
        type: String,
        trim: true,
        required: [true, 'Please add a url']
    },

    title: {
        type: String,
        required: [true, 'Please add a title']
    },

    description: {
        type: String,
        required: [true, 'Please add a description']
    },

    category: {
        type: String,
        required: [true, 'Please choose a category']
    },

    medium: {
        type: String,
        required: [true, 'Please choose a medium']
    },

    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Resource', ResourceSchema);