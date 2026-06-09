import { createBot } from "@agntdev/bot-toolkit";
import { registerHandlers, type SessionData } from "./handlers.js";

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("BOT_TOKEN is required");
  process.exit(1);
}

const bot = createBot<SessionData>(token, {
  initial: () => ({}),
});
registerHandlers(bot);
bot.start();
