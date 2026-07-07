import mongoose from 'mongoose';

const serverSettingsSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true,
    unique: true
  },
  prefix: {
    type: String,
    default: '!'
  },
  premiumUntil: {
    type: Date,
    default: null
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  premiumTier: {
    type: String,
    enum: ['free', 'basic', 'pro', 'elite'],
    default: 'free'
  },
  moderation: {
    logChannel: String,
    muteRole: String,
    bannedWords: [String],
    autoMod: Boolean,
    antiSpam: Boolean,
    antiRaid: Boolean
  },
  music: {
    volume: { type: Number, default: 50 },
    djRole: String,
    allowExternal: { type: Boolean, default: true }
  },
  welcomeMessage: {
    enabled: Boolean,
    channel: String,
    message: String
  },
  tickets: {
    enabled: Boolean,
    category: String,
    logChannel: String
  },
  customCommands: [
    {
      name: String,
      response: String,
      createdBy: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const ServerSettings = mongoose.model('ServerSettings', serverSettingsSchema);
