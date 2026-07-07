import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'dice-roll';
export const description = 'Roll multiple dice';
export const usage = 'dice-roll <number>';
export const cooldown = 3;

export async function execute(message, args) {
  const count = parseInt(args[0]) || 1;
  let total = 0;
  for (let i = 0; i < count; i++) total += Math.floor(Math.random() * 6) + 1;
  const embed = CustomEmbedBuilder.success('🎲 Rolled', `Total: ${total}`);
  message.reply({ embeds: [embed] });
}
