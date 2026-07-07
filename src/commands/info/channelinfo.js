import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'channelinfo';
export const description = 'Get channel information';
export const usage = 'channelinfo [channel]';
export const cooldown = 5;

export async function execute(message, args) {
  const channel = message.mentions.channels.first() || message.channel;
  
  const embed = CustomEmbedBuilder.info(channel.name, '')
    .addFields(
      { name: 'ID', value: channel.id, inline: true },
      { name: 'Type', value: channel.type, inline: true },
      { name: 'Created', value: channel.createdAt.toDateString(), inline: true },
      { name: 'Slowmode', value: `${channel.rateLimitPerUser}s` || '0s', inline: true }
    );
  
  message.reply({ embeds: [embed] });
}
