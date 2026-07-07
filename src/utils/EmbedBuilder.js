import { EmbedBuilder as DiscordEmbed } from 'discord.js';

export class CustomEmbedBuilder extends DiscordEmbed {
  static success(title, description) {
    return new DiscordEmbed()
      .setColor('#00FF00')
      .setTitle('✅ ' + title)
      .setDescription(description);
  }

  static error(title, description) {
    return new DiscordEmbed()
      .setColor('#FF0000')
      .setTitle('❌ ' + title)
      .setDescription(description);
  }

  static info(title, description) {
    return new DiscordEmbed()
      .setColor('#0099FF')
      .setTitle('ℹ️ ' + title)
      .setDescription(description);
  }

  static warning(title, description) {
    return new DiscordEmbed()
      .setColor('#FFFF00')
      .setTitle('⚠️ ' + title)
      .setDescription(description);
  }

  static loading(title, description) {
    return new DiscordEmbed()
      .setColor('#FFA500')
      .setTitle('⏳ ' + title)
      .setDescription(description);
  }
}
