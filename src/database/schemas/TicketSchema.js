import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  guildId: String,
  channelId: String,
  userId: String,
  subject: String,
  status: {
    type: String,
    enum: ['open', 'closed', 'solved'],
    default: 'open'
  },
  messages: Number,
  createdAt: { type: Date, default: Date.now },
  closedAt: Date
});

export const Ticket = mongoose.model('Ticket', ticketSchema);
