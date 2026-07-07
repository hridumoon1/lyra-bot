import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'leaderboard';
export const description = 'View leaderboard';
export const cooldown = 10;

export async function execute(message, args) {
  const embed = CustomEmbedBuilder.info('🏆 Leaderboard', '')
    .addFields(
      { name: '1. User1', value: '1000 XP', inline: false },
      { name: '2. User2', value: '900 XP', inline: false },
      { name: '3. User3', value: '800 XP', inline: false }
    );
  message.reply({ embeds: [embed] });
}
