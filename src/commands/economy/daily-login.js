import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'daily-login';
export const description = 'Daily login reward';
export const cooldown = 86400;

export async function execute(message) {
  const streak = 5;
  const reward = 100 * streak;
  const embed = CustomEmbedBuilder.success('✅ Daily Login', `Streak: ${streak}\nReward: ${reward} coins`);
  message.reply({ embeds: [embed] });
}
