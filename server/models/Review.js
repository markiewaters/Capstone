import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 @]*$/
  },
  message: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 @]*$/
  }
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
