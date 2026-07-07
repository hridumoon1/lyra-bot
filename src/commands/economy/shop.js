import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'shop';
export const description = 'View shop';
export const cooldown = 5;

export async function execute(message) {
  const embed = CustomEmbedBuilder.info('🛍️ Shop', '')
    .addFields(
      { name: 'Premium Badge', value: '100 coins', inline: true },
      { name: 'Custom Role', value: '500 coins', inline: true },
      { name: 'VIP Status', value: '1000 coins', inline: true }
    );
  message.reply({ embeds: [embed] });
}
