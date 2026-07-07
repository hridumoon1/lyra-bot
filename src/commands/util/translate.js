import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'translate';
export const description = 'Translate text';
export const usage = 'translate <to_lang> <text>';
export const cooldown = 5;

export async function execute(message, args) {
  if (args.length < 2) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Usage: translate <lang> <text>')] });
  
  const lang = args[0];
  const text = args.slice(1).join(' ');
  
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${lang}`);
    const data = await res.json();
    
    const embed = CustomEmbedBuilder.success('Translated', data.responseData.translatedText);
    message.reply({ embeds: [embed] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Translation failed')] });
  }
}
