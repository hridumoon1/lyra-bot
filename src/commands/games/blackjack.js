import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'blackjack';
export const description = 'Play blackjack';
export const cooldown = 5;

export async function execute(message) {
  const embed = CustomEmbedBuilder.info('🃏 Blackjack', 'Dealer: 15\nYou: 18\nYou Won!');
  message.reply({ embeds: [embed] });
}
