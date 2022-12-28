import mongoose from "mongoose";

const User = mongoose.Schema({
    nik:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    age:{
        type: String,
        required: false,
    },
    birthday:{
        type: String,
        required: false,
    },
    gender:{
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    national: {
        type: String,
        required: false,
    }
});

export default mongoose.model('Users', User);