import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  username: String,
  premium: {
    type: Boolean,
    default: false
  },
  premiumUntil: Date,
  badges: [String],
  reputation: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  experience: {
    type: Number,
    default: 0
  },
  coins: {
    type: Number,
    default: 0
  },
  commands: {
    type: Number,
    default: 0
  },
  bio: String,
  customStatus: String,
  avatar: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const UserProfile = mongoose.model('UserProfile', userProfileSchema);
