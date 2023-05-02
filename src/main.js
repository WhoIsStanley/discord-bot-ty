// libaray
import { Client, Events, GatewayIntentBits } from 'discord.js';
import vueinit from '@/core/vue';
import dotenv from 'dotenv';
import { loadCommands } from '@/core/loader';

loadCommands();

vueinit();
dotenv.config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// 'c' = event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Bot Ready! Logged in as ${c.user.tag}`);
});



// Log in to Discord with your client's token
client.login(process.env.TOKEN);