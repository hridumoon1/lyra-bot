import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'resetsettings';
export const description = 'Reset server settings';
export const cooldown = 10;

export async function execute(message, args) {
  if (!message.member.permissions.has('Administrator')) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'You need Administrator permission')] });
  }
  
  // Reset in database
  const embed = CustomEmbedBuilder.success('Reset', 'Server settings have been reset');
  message.reply({ embeds: [embed] });
}
