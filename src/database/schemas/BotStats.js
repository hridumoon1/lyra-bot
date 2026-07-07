import mongoose from 'mongoose';

const botStatsSchema = new mongoose.Schema({
  botId: {
    type: String,
    required: true,
    unique: true
  },
  prefixCommands: {
    type: Number,
    default: 0
  },
  slashCommands: {
    type: Number,
    default: 0
  },
  totalCommands: {
    type: Number,
    default: 0
  },
  servers: {
    type: Number,
    default: 0
  },
  users: {
    type: Number,
    default: 0
  },
  uptime: {
    type: Number,
    default: 0
  },
  errors: {
    type: Number,
    default: 0
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const BotStats = mongoose.model('BotStats', botStatsSchema);
