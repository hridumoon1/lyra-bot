import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'rolemenu';
export const description = 'Create role menu';
export const cooldown = 10;

export async function execute(message, args) {
  if (!message.member.permissions.has('Administrator')) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'You need Administrator permission')] });
  }
  
  const embed = CustomEmbedBuilder.info('🎯 Role Menu', 'React to get roles!');
  const msg = await message.reply({ embeds: [embed] });
  
  await msg.react('🎮');
  await msg.react('🎨');
  await msg.react('🎵');
}
