import mongoose from 'mongoose';

const giveawaySchema = new mongoose.Schema({
  guildId: String,
  messageId: String,
  channelId: String,
  prize: String,
  winners: { type: Number, default: 1 },
  endTime: Date,
  hostId: String,
  participants: [String],
  ended: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export const Giveaway = mongoose.model('Giveaway', giveawaySchema);
