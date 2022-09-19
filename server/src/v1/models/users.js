const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {schemaOptions} = require('./modelOptions');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dzjv9xjxh/image/upload/v1597150008/avatars/default-avatar.png",
    },
    roles: {
        type: Schema.Types.Array,
        default: ["user"],
        ref: "Role",
    },
}, schemaOptions);

module.exports = mongoose.model('User', userSchema);
