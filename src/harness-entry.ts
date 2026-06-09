import type { Bot } from "grammy";
import { createBot, type BotContext } from "@agntdev/bot-toolkit";
import { registerHandlers, type SessionData } from "./handlers.js";

export function makeBot(): Bot<BotContext<SessionData>> {
  const bot = createBot<SessionData>("dummy-token", {
    initial: () => ({}),
  });
  registerHandlers(bot);
  return bot;
}
