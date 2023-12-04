import mongoose, { models } from "mongoose";

const promptSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    prompt: {
        type: String,
        required: true,
    },
    tag: {
        type: String,  // Fix the typo here (change typr to type)
        required: true,
    }
});

const Prompt = models.Prompt || mongoose.model('Prompt', promptSchema);
export default Prompt;
