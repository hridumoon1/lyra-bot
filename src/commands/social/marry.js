import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'marry';
export const description = 'Marry someone';
export const usage = 'marry <user>';
export const cooldown = 300;

export async function execute(message, args) {
  const user = message.mentions.users.first();
  if (!user) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a user')] });
  const embed = CustomEmbedBuilder.success('💒 Married', `You married ${user.username}!`);
  message.reply({ embeds: [embed] });
}
