import mongoose from 'mongoose';

// const tweetDoc = {
//     content: newTweet,
//     username: "abe123",
//     likes: 0,
//     retweets: 0,
//     timestamp: new Date(),
//     id: uuidv4(),
//   };

const listingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    
    listing: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default:0,
        required: true
    },
    username: {
        type: String,
        required: true
    },
  

}, {timestamps: true});



export default mongoose.model('Listing', listingSchema);