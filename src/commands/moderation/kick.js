import { PermissionFlagsBits } from 'discord.js';
import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'kick';
export const description = 'Kick a user from the server';
export const aliases = ['kickuser'];
export const usage = 'kick <user> [reason]';
export const cooldown = 5;

export async function execute(message, args) {
  if (!message.member.permissions.has(PermissionFlagsBits.KickMembers)) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Permission Denied', 'You need Kick Members permission')] });
  }

  const user = message.mentions.users.first();
  if (!user) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a user')] });

  const reason = args.slice(1).join(' ') || 'No reason provided';

  try {
    await message.guild.members.kick(user, { reason });
    message.reply({ embeds: [CustomEmbedBuilder.success('User Kicked', `${user.tag} has been kicked.\nReason: ${reason}`)] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', error.message)] });
  }
}
