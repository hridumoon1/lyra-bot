import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'nuke';
export const description = 'Nuke a channel';
export const cooldown = 10;

export async function execute(message) {
  try {
    const channel = await message.channel.clone();
    await message.channel.delete();
    await channel.send({ embeds: [CustomEmbedBuilder.success('Nuked', 'Channel has been nuked')] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', e.message)] });
  }
}
