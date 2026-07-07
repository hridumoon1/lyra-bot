import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'dice';
export const description = 'Roll a dice';
export const aliases = ['roll'];
export const cooldown = 3;

export async function execute(message, args) {
  const sides = parseInt(args[0]) || 6;
  const result = Math.floor(Math.random() * sides) + 1;
  
  message.reply({ embeds: [CustomEmbedBuilder.info('🎲 Dice Roll', `You rolled a **${result}** out of ${sides}`)] });
}
