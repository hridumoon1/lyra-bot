import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'autorole';
export const description = 'Set autorole';
export const usage = 'autorole <role>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!message.member.permissions.has('Administrator')) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'You need Administrator permission')] });
  }
  
  const role = message.mentions.roles.first();
  if (!role) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a role')] });
  
  // Update in database
  const embed = CustomEmbedBuilder.success('Autorole Set', `Autorole set to ${role.name}`);
  message.reply({ embeds: [embed] });
}
