import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'sell';
export const description = 'Sell item';
export const usage = 'sell <item_id>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please specify item')] });
  const embed = CustomEmbedBuilder.success('Sold', `You sold the item!`);
  message.reply({ embeds: [embed] });
}
