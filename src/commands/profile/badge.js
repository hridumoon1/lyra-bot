import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'badge';
export const description = 'Get badges';
export const cooldown = 5;

export async function execute(message) {
  const embed = CustomEmbedBuilder.info('🏅 Badges', '')
    .addFields(
      { name: 'Developer', value: '⭐', inline: true },
      { name: 'Supporter', value: '💙', inline: true },
      { name: 'Contributor', value: '🎯', inline: true }
    );
  message.reply({ embeds: [embed] });
}
