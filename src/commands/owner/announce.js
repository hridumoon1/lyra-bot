import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'announce';
export const description = 'Announce a message';
export const ownerOnly = true;
export const usage = 'announce <message>';

export async function execute(message, args, client) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide announcement')] });
  }

  const announcement = args.join(' ');
  const embed = CustomEmbedBuilder.info('📢 Announcement', announcement);

  for (const guild of client.guilds.cache.values()) {
    const channel = guild.channels.cache.find(c => c.isTextBased() && c.permissionsFor(guild.members.me).has('SendMessages'));
    if (channel) {
      await channel.send({ embeds: [embed] }).catch(() => {});
    }
  }

  message.reply({ embeds: [CustomEmbedBuilder.success('Done', 'Announcement sent to all servers')] });
}
