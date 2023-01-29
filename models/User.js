import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
    first_name: {
        type: String
    },

    last_name: {
        type: String
    },

    username: {
        type: String
    },

    email: {
        type: String
    },

    password: {
        type: String
    },

    avatar: {
        type: String
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now
    },

    garden: {
        type: Array
    }
    
})

export default mongoose.models.User || mongoose.model('User', userSchema)