import mongoose from 'mongoose';

const SpotSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
  },
  company: {
    type: String,
    required: true,
  },
  techs: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Spot', SpotSchema);
