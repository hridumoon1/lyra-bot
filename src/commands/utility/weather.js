import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';
import axios from 'axios';

export const name = 'weather';
export const description = 'Get weather information';
export const usage = 'weather <city>';
export const cooldown = 10;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please specify a city')] });
  }

  const city = args.join(' ');
  try {
    const res = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
      params: { key: process.env.WEATHER_API, q: city }
    });
    
    const data = res.data.current;
    const embed = CustomEmbedBuilder.info(`🌤️ Weather in ${city}`, '')
      .addFields(
        { name: 'Temperature', value: `${data.temp_c}°C / ${data.temp_f}°F`, inline: true },
        { name: 'Condition', value: data.condition.text, inline: true },
        { name: 'Humidity', value: `${data.humidity}%`, inline: true },
        { name: 'Wind Speed', value: `${data.wind_kph} km/h`, inline: true }
      )
      .setThumbnail(`https:${data.condition.icon}`);
    
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'City not found')] });
  }
}
