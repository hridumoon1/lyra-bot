import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'buy';
export const description = 'Buy item from shop';
export const usage = 'buy <item_id>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please specify item')] });
  const embed = CustomEmbedBuilder.success('Purchased', `You bought the item!`);
  message.reply({ embeds: [embed] });
}
