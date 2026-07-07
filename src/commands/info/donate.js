import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'donate';
export const description = 'Get donation info';
export const cooldown = 5;

export async function execute(message) {
  const embed = CustomEmbedBuilder.info('❤️ Support Us', 'Thank you for wanting to support Lyra Bot!')
    .addFields(
      { name: 'Patreon', value: '[Link](https://patreon.com)' },
      { name: 'Ko-fi', value: '[Link](https://ko-fi.com)' },
      { name: 'PayPal', value: '[Link](https://paypal.com)' }
    );
  
  message.reply({ embeds: [embed] });
}
