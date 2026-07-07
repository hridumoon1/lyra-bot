# 🎵 Lyra Bot v2.0

A powerful all-in-one Discord bot with 600+ commands, music player, moderation, and more!

## Features

✨ **600+ Commands**
- Moderation Commands (ban, kick, mute, warn)
- Music Player (with Lavalink)
- Fun Commands (jokes, games, etc)
- Utility Commands (userinfo, serverinfo, etc)
- Owner Commands
- Custom Commands
- Giveaway System
- Ticket System
- Leveling System

## Installation

### Prerequisites
- Node.js v16+
- MongoDB
- Lavalink Server
- Discord Bot Token

### Setup

1. Clone the repository
```bash
git clone https://github.com/hridumoon1/lyra-bot.git
cd lyra-bot
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Update `.env` with your credentials

5. Start the bot
```bash
npm start
```

## Configuration

Edit `.env` file with your settings:
- `TOKEN` - Discord Bot Token
- `CLIENT_ID` - Bot Client ID
- `MONGODB_URL` - MongoDB Connection URL
- `PREFIX` - Bot Command Prefix
- `OWNER_ID` - Your Discord ID

## Commands

### Moderation
- `!ban <user> [reason]` - Ban a user
- `!kick <user> [reason]` - Kick a user
- `!mute <user> [duration]` - Mute a user
- `!warn <user> [reason]` - Warn a user

### Utility
- `!ping` - Check bot latency
- `!help` - Show all commands
- `!userinfo [user]` - Get user info
- `!serverinfo` - Get server info

### Fun
- `!8ball <question>` - Ask the magic 8ball
- `!dice [sides]` - Roll a dice
- `!joke` - Get a random joke

## Support

For support, join our Discord server or open an issue on GitHub.

## License

MIT License

## Author

Lyra Development Team
