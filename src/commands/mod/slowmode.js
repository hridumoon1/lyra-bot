import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'slowmode';
export const description = 'Set channel slowmode';
export const usage = 'slowmode <seconds>';
export const cooldown = 5;

export async function execute(message, args) {
  const seconds = parseInt(args[0]);
  if (!seconds || seconds < 0 || seconds > 21600) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Provide seconds between 0-21600')] });
  
  try {
    await message.channel.setRateLimitPerUser(seconds);
    message.reply({ embeds: [CustomEmbedBuilder.success('Slowmode Set', `Slowmode set to ${seconds}s`)] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', e.message)] });
  }
}
