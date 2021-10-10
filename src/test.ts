import { Telegraf } from 'telegraf';
import config from './token.json';

export function startBot(): void {
  const token = config.token;
  const bot = new Telegraf(token);

  bot.command('quit', ctx => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id);

    // Using context shortcut
    ctx.leaveChat();
  });

  bot.command('test', ctx => {
    ctx.telegram.sendMessage(ctx.message.chat.id, `Test`);
  });

  bot.on('text', ctx => {
    // Explicit usage
    // console.debug('state', ctx.state, ctx);
    ctx.telegram.sendMessage(
      ctx.message.chat.id,
      `Hello ${ctx.update.update_id}`,
    );

    // Using context shortcut
    // ctx.reply(`Hello ${ctx.state.role}`)
  });

  bot.on('callback_query', ctx => {
    // Explicit usage
    ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

    // Using context shortcut
    ctx.answerCbQuery();
  });

  bot.launch();

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}
