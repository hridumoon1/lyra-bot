import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'status';
export const description = 'Get bot status';
export const ownerOnly = true;
export const cooldown = 5;

export async function execute(message, args, client) {
  const uptime = client.uptime;
  const days = Math.floor(uptime / 86400000);
  const hours = Math.floor((uptime % 86400000) / 3600000);
  const minutes = Math.floor((uptime % 3600000) / 60000);

  const embed = CustomEmbedBuilder.info('🤖 Bot Status', '')
    .addFields(
      { name: 'Uptime', value: `${days}d ${hours}h ${minutes}m`, inline: true },
      { name: 'Servers', value: client.guilds.cache.size.toString(), inline: true },
      { name: 'Users', value: client.users.cache.size.toString(), inline: true },
      { name: 'Latency', value: `${Math.round(client.ws.ping)}ms`, inline: true },
      { name: 'Memory', value: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, inline: true }
    );
  
  message.reply({ embeds: [embed] });
}
