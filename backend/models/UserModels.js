import mongoose from "mongoose";

const User = mongoose.Schema({
    nik:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    birthday:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    national: {
        type: String,
        required: true,
    }
});

export default mongoose.model('Users', User);