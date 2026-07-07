import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'time';
export const description = 'Get current time';
export const cooldown = 3;

export async function execute(message, args) {
  const timezone = args[0] || 'UTC';
  const time = new Date().toLocaleString('en-US', { timeZone: timezone });
  
  const embed = CustomEmbedBuilder.info(`🕐 Time in ${timezone}`, time);
  message.reply({ embeds: [embed] });
}
