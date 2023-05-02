import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('reply a pong');

export const action = async(ctx) => {
    ctx.reply('pong');
}