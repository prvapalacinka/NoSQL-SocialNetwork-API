const { Schema, model, Types } = require('mongoose');
const opts = { toJSON: { virtuals: true }}; 
const userSchema = new Schema ({
    id: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, "Must match a valid email address"]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    
    ]
}, {
    toJSON: {
        virtuls: true,
    },
}
);

userSchema.virtual('domain').get(function() {
    return this.friends.length;
});

const User = model('user', userSchema)

module.exports = User