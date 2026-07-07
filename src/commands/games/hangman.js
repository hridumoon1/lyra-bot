import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'hangman';
export const description = 'Play hangman';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Guess a letter')] });
  const embed = CustomEmbedBuilder.info('🎮 Hangman', `Letter: ${args[0]}\nWord: _ _ _ _ _`);
  message.reply({ embeds: [embed] });
}
