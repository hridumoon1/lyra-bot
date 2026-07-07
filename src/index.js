import { Client, Collection, GatewayIntentBits, Partials } from 'discord.js';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { connectDatabase } from './database/connection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User],
});

// Initialize Collections
client.commands = new Collection();
client.slashCommands = new Collection();
client.prefix = process.env.PREFIX || '!';
client.owners = [process.env.OWNER_ID];

// Load Events
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = await import(`file://${filePath}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(client, ...args));
  } else {
    client.on(event.name, (...args) => event.execute(client, ...args));
  }
  console.log(chalk.green(`✓ Event loaded: ${file}`));
}

// Connect to Database
await connectDatabase();

// Login
client.login(process.env.TOKEN);

export default client;
