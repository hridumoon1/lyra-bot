import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'unlock';
export const description = 'Unlock a channel';
export const cooldown = 5;

export async function execute(message) {
  try {
    await message.channel.permissionOverwrites.delete(message.guild.id);
    message.reply({ embeds: [CustomEmbedBuilder.success('Unlocked', 'Channel has been unlocked')] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', e.message)] });
  }
}
