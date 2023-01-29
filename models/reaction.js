const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {

        type: Scheme.Types.ObjectId,
        default: () => new Types.ObjectId(),

    },
    reationBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    get: currentDate => currentDate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
    },
    username: {
        type: String,
        required: true
    }
},
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = reactionSchema