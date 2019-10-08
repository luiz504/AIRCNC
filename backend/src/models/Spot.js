import mongoose from 'mongoose';

const SpotSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://${process.env.LOCAL_IP}:3333/files/${this.thumbnail}`;
});

export default mongoose.model('Spot', SpotSchema);
