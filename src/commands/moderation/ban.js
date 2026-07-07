import { PermissionFlagsBits } from 'discord.js';
import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'ban';
export const description = 'Ban a user from the server';
export const aliases = ['banuser'];
export const usage = 'ban <user> [reason]';
export const cooldown = 5;

export async function execute(message, args) {
  if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Permission Denied', 'You need Ban Members permission')] });
  }

  const user = message.mentions.users.first();
  if (!user) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a user')] });

  const reason = args.slice(1).join(' ') || 'No reason provided';

  try {
    await message.guild.members.ban(user, { reason });
    message.reply({ embeds: [CustomEmbedBuilder.success('User Banned', `${user.tag} has been banned.\nReason: ${reason}`)] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', error.message)] });
  }
}
