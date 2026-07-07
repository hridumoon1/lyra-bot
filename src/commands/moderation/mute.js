import { PermissionFlagsBits } from 'discord.js';
import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'mute';
export const description = 'Mute a user';
export const aliases = ['muteuser'];
export const usage = 'mute <user> [duration]';
export const cooldown = 5;

export async function execute(message, args) {
  if (!message.member.permissions.has(PermissionFlagsBits.ModerateMembers)) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Permission Denied', 'You need Moderate Members permission')] });
  }

  const user = message.mentions.users.first();
  if (!user) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a user')] });

  const duration = args[1] || '1h';

  try {
    const member = await message.guild.members.fetch(user.id);
    await member.timeout(parseDuration(duration), 'Muted');
    message.reply({ embeds: [CustomEmbedBuilder.success('User Muted', `${user.tag} has been muted for ${duration}`)] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', error.message)] });
  }
}

function parseDuration(str) {
  const units = { s: 1000, m: 60000, h: 3600000, d: 86400000 };
  const match = str.match(/(\d+)([smhd])/);
  return match ? parseInt(match[1]) * units[match[2]] : 3600000;
}
