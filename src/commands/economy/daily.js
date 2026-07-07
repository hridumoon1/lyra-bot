import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'daily';
export const description = 'Get daily reward';
export const cooldown = 86400;

export async function execute(message) {
  const reward = Math.floor(Math.random() * 100) + 50;
  const embed = CustomEmbedBuilder.success('Daily Reward', `You got **${reward}** coins!`);
  message.reply({ embeds: [embed] });
}
