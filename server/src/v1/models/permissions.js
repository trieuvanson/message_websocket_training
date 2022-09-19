const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {schemaOptions} = require('./modelOptions');

const permissionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
}, schemaOptions);

module.exports = mongoose.model('Permission', permissionSchema);
