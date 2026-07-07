import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'qrcode';
export const description = 'Generate QR code';
export const usage = 'qrcode <text>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide text')] });
  
  const text = args.join(' ');
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
  
  const embed = CustomEmbedBuilder.info('QR Code', text)
    .setImage(qrUrl);
  
  message.reply({ embeds: [embed] });
}
