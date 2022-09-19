const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {schemaOptions} = require('./modelOptions');

const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    permissions: {
        type: Schema.Types.Array,
        ref: "Permission",
        default: [],
    }

}, schemaOptions);

module.exports = mongoose.model('Role', roleSchema);
