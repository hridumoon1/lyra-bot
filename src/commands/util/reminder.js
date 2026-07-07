import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'reminder';
export const description = 'Set reminder';
export const usage = 'reminder <time> <message>';
export const cooldown = 5;

export async function execute(message, args) {
  if (args.length < 2) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Provide time and message')] });
  const embed = CustomEmbedBuilder.success('Reminder Set', `Reminder in ${args[0]}`);
  message.reply({ embeds: [embed] });
}
