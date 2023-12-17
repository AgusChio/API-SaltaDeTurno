import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v4  } from 'uuid'
const userService = {

    async getUserByEmail( email ){
        try {
            const user = await User.findOne({email})
            return user
        } catch (error) {
            throw new Error(error.message)
        }
    },
    async getUser(obj){
        try {
            const user = await User.findOne( obj )
            return user
        } catch (error) {
            throw new Error(error.message)
        }
    },

    async createUser(data) {
        try {
            if (!data.password) {
                throw new Error("Password is required");
            }
            const encriptPassword = await this.hashPasswordAsync(data.password);
            data.password = encriptPassword;
            const newUser = await User.create(data);
            return newUser;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    
    async hashPasswordAsync(password) {
        try {
            const saltRounds = 10;
            return await bcrypt.hash(password, saltRounds);
        } catch (error) {
            console.error("Error hashing password:", error);
            throw error;
        }
    },

    async update(id, update){
        try {
            const user = await User.findOneAndUpdate( {_id:id}, update, {new:true} )
            return user
        } catch (error) {
            console.log(error)
        }
    },
    generateToken(email){
        const token = jwt.sign( {email}, process.env.SECRET_KEY, { expiresIn: '1h' } ) 
        return token
    }
    ,
    verifyPassword( requestPassword, userPassword ){
        return bcrypt.compareSync( requestPassword, userPassword )
    },
    hashPassword(password) {
        const saltRounds = 10;
        return bcrypt.hashSync(password, saltRounds);
    },
    generateKey(){
        return v4()
    }
}

export default userService