import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'birthday';
export const description = 'Set your birthday';
export const usage = 'birthday <date>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Provide date (MM/DD)')] });
  const embed = CustomEmbedBuilder.success('Birthday Set', `Your birthday: ${args.join(' ')}`);
  message.reply({ embeds: [embed] });
}
