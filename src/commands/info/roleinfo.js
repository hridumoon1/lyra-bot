import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'roleinfo';
export const description = 'Get role information';
export const usage = 'roleinfo <role>';
export const cooldown = 5;

export async function execute(message, args) {
  const role = message.mentions.roles.first();
  
  if (!role) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a role')] });
  
  const embed = CustomEmbedBuilder.info(role.name, '')
    .addFields(
      { name: 'ID', value: role.id, inline: true },
      { name: 'Color', value: role.hexColor, inline: true },
      { name: 'Members', value: role.members.size.toString(), inline: true },
      { name: 'Created', value: role.createdAt.toDateString(), inline: true },
      { name: 'Permissions', value: role.permissions.toArray().slice(0, 3).join(', ') || 'None', inline: false }
    );
  
  message.reply({ embeds: [embed] });
}
