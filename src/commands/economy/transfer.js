import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'transfer';
export const description = 'Transfer coins';
export const usage = 'transfer <user> <amount>';
export const cooldown = 5;

export async function execute(message, args) {
  const user = message.mentions.users.first();
  const amount = parseInt(args[1]);
  if (!user || !amount) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Invalid arguments')] });
  const embed = CustomEmbedBuilder.success('Transferred', `Sent ${amount} coins to ${user.username}`);
  message.reply({ embeds: [embed] });
}
