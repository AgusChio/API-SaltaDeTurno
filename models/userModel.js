import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: Boolean, default: false },
    google: { type: Boolean, default: false },
    apiKey: { type: String, default: '' },
    rol: { 
        type: String,
        enum: ['admin', 'user'],
        required: true},
    modoOscuro: { type: Boolean, default: false },
    terminosYCondiciones: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

export default User