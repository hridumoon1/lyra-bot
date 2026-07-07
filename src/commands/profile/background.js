import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'background';
export const description = 'Set profile background';
export const usage = 'background <url>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide image URL')] });
  // Save to database
  message.reply({ embeds: [CustomEmbedBuilder.success('Background Set', args[0])] });
}
