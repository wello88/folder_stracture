import { model, Schema } from "mongoose";
import { status } from "../../src/utils/constant/enums.js";


const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, enum: Object.values(status), default: status.PENDING },

}, { timestamps: true });

export const User = model('User', userSchema);