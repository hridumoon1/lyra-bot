import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'bio';
export const description = 'Set your bio';
export const usage = 'bio <text>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide bio text')] });
  const bio = args.join(' ');
  // Save to database
  message.reply({ embeds: [CustomEmbedBuilder.success('Bio Updated', bio)] });
}
