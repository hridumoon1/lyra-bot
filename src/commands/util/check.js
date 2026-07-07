import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'check';
export const description = 'Check something';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please specify what to check')] });
  const embed = CustomEmbedBuilder.info('✓ Checked', args.join(' '));
  message.reply({ embeds: [embed] });
}
