import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'purge';
export const description = 'Delete messages';
export const usage = 'purge <number>';
export const cooldown = 10;

export async function execute(message, args) {
  const num = parseInt(args[0]);
  if (!num || num < 1 || num > 100) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Provide number between 1-100')] });
  
  try {
    await message.channel.bulkDelete(num);
    message.reply({ embeds: [CustomEmbedBuilder.success('Purged', `Deleted ${num} messages`)] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', e.message)] });
  }
}
