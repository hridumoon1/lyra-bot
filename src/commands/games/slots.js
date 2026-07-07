import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'slots';
export const description = 'Play slots';
export const usage = 'slots <bet>';
export const cooldown = 5;

export async function execute(message, args) {
  const bet = parseInt(args[0]) || 10;
  const symbols = ['🍎', '🍊', '🍋', '🍌', '🍉'];
  const spin = [symbols[Math.floor(Math.random() * 5)], symbols[Math.floor(Math.random() * 5)], symbols[Math.floor(Math.random() * 5)]];
  const embed = CustomEmbedBuilder.info('🎰 Slots', `${spin.join(' ')} | Bet: ${bet}`);
  message.reply({ embeds: [embed] });
}
