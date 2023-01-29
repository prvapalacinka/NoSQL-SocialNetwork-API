// const { ObjectId } = require('json');
const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 200,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: currentDate => currentDate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
    },

}
);
const thoughtSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 200,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: currentDate => currentDate.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true,
        }
    }
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema)

module.exports = Thought