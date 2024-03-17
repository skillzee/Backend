import mongoose, {Schema} from "mongoose";


const subscriptionSchema = new Schema({
    subscriber:{
        type: Schema.Types.ObjectId, // onw who is subscribing
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId, // onw to whom user have subscribed
        ref: "User"
    }
},{timestamps: true})



export const Subscription = mongoose.model("Subscription", subscriptionSchema)