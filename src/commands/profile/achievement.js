import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'achievement';
export const description = 'View achievements';
export const cooldown = 5;

export async function execute(message) {
  const embed = CustomEmbedBuilder.info('🎖️ Achievements', '')
    .addFields(
      { name: 'First Command', value: '✓ Completed' },
      { name: 'Level 10', value: '✗ Not completed' },
      { name: 'Millionaire', value: '✗ Not completed' }
    );
  message.reply({ embeds: [embed] });
}
