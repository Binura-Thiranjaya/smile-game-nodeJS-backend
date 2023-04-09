
import {mongoose} from 'mongoose';
 const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', UserSchema);
// module.exports = User;
export default User;