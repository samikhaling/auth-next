import mongoose from "mongoose";
const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please provide your username"],
        unique: true,
    },
    email : {
        type: String,
        required: [true,"Please provide your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true,"Please provide your password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userShema);
export default User;