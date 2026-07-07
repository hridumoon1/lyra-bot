import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';
import { PermissionFlagsBits } from 'discord.js';

export const name = 'warn';
export const description = 'Warn a user';
export const usage = 'warn <user> [reason]';
export const cooldown = 5;

export async function execute(message, args) {
  if (!message.member.permissions.has(PermissionFlagsBits.ModerateMembers)) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Permission Denied', 'You need Moderate Members permission')] });
  }

  const user = message.mentions.users.first();
  if (!user) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a user')] });

  const reason = args.slice(1).join(' ') || 'No reason provided';

  try {
    await user.send({ embeds: [CustomEmbedBuilder.warning('You have been warned', `Server: ${message.guild.name}\nReason: ${reason}`)] });
    message.reply({ embeds: [CustomEmbedBuilder.success('User Warned', `${user.tag} has been warned.\nReason: ${reason}`)] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', error.message)] });
  }
}
