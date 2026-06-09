import { Bot, type Context, type SessionFlavor } from "grammy";
import { inlineButton, inlineKeyboard } from "@agntdev/bot-toolkit";

export type SessionData = Record<string, unknown>;

const gmMarkup = inlineKeyboard([[inlineButton("gm", "gm")]]);

const START_TEXT = "gm! I'm GM Bot. Send /gm for a good morning, or /help.";
const GM_TEXT = "GM, ser! Stay bullish.";
const HELP_TEXT = "Commands:\n/start - intro\n/gm - say gm\n/help - this help";

export function registerHandlers(bot: Bot<Context & SessionFlavor<SessionData>>): void {
  bot.command("start", async (ctx) => {
    await ctx.reply(START_TEXT, { reply_markup: gmMarkup });
  });

  bot.command("gm", async (ctx) => {
    await ctx.reply(GM_TEXT, { reply_markup: gmMarkup });
  });

  bot.command("help", async (ctx) => {
    await ctx.reply(HELP_TEXT);
  });

  bot.callbackQuery("gm", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply(GM_TEXT, { reply_markup: gmMarkup });
  });
}
