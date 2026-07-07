import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'statistics';
export const description = 'View your statistics';
export const cooldown = 5;

export async function execute(message) {
  const embed = CustomEmbedBuilder.info('📊 Statistics', '')
    .addFields(
      { name: 'Commands Used', value: '150', inline: true },
      { name: 'Messages', value: '500', inline: true },
      { name: 'Level', value: '5', inline: true },
      { name: 'Coins', value: '1000', inline: true },
      { name: 'Playtime', value: '10h', inline: true },
      { name: 'Rank', value: '#10', inline: true }
    );
  message.reply({ embeds: [embed] });
}
