import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Please enter ID"],
    },
    name: {
        type: String,
        required: [true, "Please enter Name"],
    },
    email: {
        type: String,
        unique: [true, "Email already Exist"],
        required: [true, "Please enter Email"],
        validate: validator.isEmail,
    },
    photo: {
        type: String,
        required: [true, "Please enter Photo"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please enter Gender"],
    },
    dob: {
        type: Date,
        required: [true, "Please enter Date of Birth"],
    }
}, {
    timestamps: true,
});
// For adding virtual attributes
schema.virtual("age").get(function () {
    if (!this.dob)
        return undefined; // Handle if date of birth is not provided
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});
export const User = mongoose.model("User", schema);
