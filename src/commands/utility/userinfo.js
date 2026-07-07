import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'userinfo';
export const description = 'Get user information';
export const usage = 'userinfo [user]';
export const cooldown = 5;

export async function execute(message, args) {
  const user = message.mentions.users.first() || message.author;
  const member = message.guild.members.cache.get(user.id);

  const embed = CustomEmbedBuilder.info('User Information', '')
    .addFields(
      { name: 'Username', value: user.username, inline: true },
      { name: 'Discriminator', value: user.discriminator, inline: true },
      { name: 'User ID', value: user.id, inline: true },
      { name: 'Account Created', value: user.createdAt.toDateString(), inline: true },
      { name: 'Joined Server', value: member?.joinedAt?.toDateString() || 'N/A', inline: true },
      { name: 'Avatar URL', value: `[Link](${user.avatarURL()})`, inline: true }
    )
    .setThumbnail(user.avatarURL());

  message.reply({ embeds: [embed] });
}
