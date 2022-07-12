const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {
        type: String,
        req: [true, 'email is required'],
        unique: [true],
        lowercase: true
    },
    password: {
        type: String,
        // req: true,
        minlength: [6, 'password is at least 6 characters']
    },
    name: {
        type: String,
        req: [true, 'name is required'],
        lowecase: true
    },
    title: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        default: 'student',
        enum:['root','admin','student']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema)