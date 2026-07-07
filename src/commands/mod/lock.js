import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'lock';
export const description = 'Lock a channel';
export const cooldown = 5;

export async function execute(message) {
  try {
    await message.channel.permissionOverwrites.create(message.guild.id, { SendMessages: false });
    message.reply({ embeds: [CustomEmbedBuilder.success('Locked', 'Channel has been locked')] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', e.message)] });
  }
}
