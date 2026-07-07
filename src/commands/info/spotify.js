import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'spotify';
export const description = 'Get user spotify status';
export const usage = 'spotify [user]';
export const cooldown = 5;

export async function execute(message) {
  const user = message.mentions.users.first() || message.author;
  const member = message.guild.members.cache.get(user.id);
  
  const spotify = member?.presence?.activities.find(a => a.name === 'Spotify');
  
  if (!spotify) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'User is not listening to Spotify')] });
  }
  
  const embed = CustomEmbedBuilder.info(`♪ ${spotify.state}`, `Artist: ${spotify.details}`)
    .addFields({ name: 'Album', value: spotify.assets?.largeText || 'N/A' })
    .setThumbnail(user.avatarURL());
  
  message.reply({ embeds: [embed] });
}
