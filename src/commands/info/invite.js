import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'invite';
export const description = 'Get bot invite link';
export const cooldown = 5;

export async function execute(message, args, client) {
  const invite = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`;
  
  const embed = CustomEmbedBuilder.info('🔗 Invite Link', `[Invite Lyra Bot](${invite})`);
  message.reply({ embeds: [embed] });
}
