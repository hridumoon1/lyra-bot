import chalk from 'chalk';
import { ActivityType } from 'discord.js';

export const name = 'ready';
export const once = true;

export async function execute(client) {
  console.log(chalk.cyan.bold(`\n${'═'.repeat(50)}\n`));
  console.log(chalk.blue(`  🎵 Lyra Bot v2.0 is online!`));
  console.log(chalk.blue(`  ✓ Logged in as: ${client.user.tag}`));
  console.log(chalk.blue(`  ✓ Serving ${client.guilds.cache.size} servers`));
  console.log(chalk.blue(`  ✓ Commands loaded: ${client.commands.size}`));
  console.log(chalk.cyan.bold(`\n${'═'.repeat(50)}\n`));

  // Set bot status
  client.user.setPresence({
    activities: [{
      name: 'music in servers | /help',
      type: ActivityType.Listening
    }],
    status: 'dnd'
  });
}
