import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    cart:{
        type: Array,
    },
    favorites:{
        type: Array,
    },
    bonus_points:{
        type: Number
    },
    role:{
        type: String,
        default: 'user'
    }
},
{
    timestamps: true
})

export default mongoose.models.User || mongoose.model('User', UserSchema)