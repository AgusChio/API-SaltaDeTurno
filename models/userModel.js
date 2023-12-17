import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, minlength: 4, maxlength: 50},
    password: { type: String, required: true, minlength: 8},
    status: { type: Boolean, default: false },
    google: { type: Boolean, default: false},
    apiKey: { type: String, default: '' },
    rol: { 
        type: String,
        enum: ['admin', 'user'],
        required: true},
    modoOscuro: { type: Boolean, default: false },
    terminosYCondiciones: { type: Boolean, default: false, required: true },
});

const User = mongoose.model('User', userSchema);

export default User