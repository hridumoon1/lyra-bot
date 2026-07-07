import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'inventory';
export const description = 'View inventory';
export const cooldown = 5;

export async function execute(message) {
  const embed = CustomEmbedBuilder.info('📦 Inventory', '')
    .addFields(
      { name: 'Sword', value: '1x', inline: true },
      { name: 'Shield', value: '1x', inline: true },
      { name: 'Potion', value: '5x', inline: true }
    );
  message.reply({ embeds: [embed] });
}
