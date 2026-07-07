import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'stats';
export const description = 'View bot statistics';
export const cooldown = 5;

export async function execute(message, args, client) {
  const embed = CustomEmbedBuilder.info('📊 Bot Statistics', '')
    .addFields(
      { name: 'Servers', value: client.guilds.cache.size.toString(), inline: true },
      { name: 'Users', value: client.users.cache.size.toString(), inline: true },
      { name: 'Channels', value: client.channels.cache.size.toString(), inline: true },
      { name: 'Commands', value: client.commands.size.toString(), inline: true },
      { name: 'Uptime', value: `${Math.floor(client.uptime / 1000 / 60)} minutes`, inline: true },
      { name: 'Latency', value: `${Math.round(client.ws.ping)}ms`, inline: true }
    );
  
  message.reply({ embeds: [embed] });
}
