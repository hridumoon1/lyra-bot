import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'ping';
export const description = 'Check bot latency';
export const cooldown = 3;

export async function execute(message, args, client) {
  const sent = await message.reply({ embeds: [CustomEmbedBuilder.loading('Ping', 'Measuring...')] });
  
  const latency = sent.createdTimestamp - message.createdTimestamp;
  const apiLatency = Math.round(client.ws.ping);

  sent.edit({ 
    embeds: [CustomEmbedBuilder.info('🏓 Pong!', `Message Latency: ${latency}ms\nAPI Latency: ${apiLatency}ms`)] 
  });
}
