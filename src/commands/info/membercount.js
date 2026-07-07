import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'membercount';
export const description = 'Get server member count';
export const cooldown = 5;

export async function execute(message) {
  const members = message.guild.members.cache;
  const users = members.filter(m => !m.user.bot).size;
  const bots = members.filter(m => m.user.bot).size;
  
  const embed = CustomEmbedBuilder.info('Member Count', '')
    .addFields(
      { name: 'Total', value: members.size.toString(), inline: true },
      { name: 'Users', value: users.toString(), inline: true },
      { name: 'Bots', value: bots.toString(), inline: true }
    );
  
  message.reply({ embeds: [embed] });
}
