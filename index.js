const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "8117923609:AAHQIeFNaoBCw9cJGlkxh51y3xVLJkMbOZA"

const bot = new TelegramBot(TOKEN, { polling: true });



// Arrow function (strelkali funksiya)
bot.on("message", (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  //   bot.sendMessage(chatId, text);

  if (text == "/start" || text == "Boshlash 🔥") {
    bot.sendMessage(
      chatId,
      `
    👋 Assalomu alaykum, ${firstName}!

📚 100x o‘quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma’lumot olasiz  
• Kurslarga onlayn ro‘yxatdan o‘tishingiz mumkin  
• Jadval va to‘lovlar haqida ma’lumot olasiz  

Quyidagi menyudan kerakli bo‘limni tanlang 👇

    `,
      {
        reply_markup: {
          keyboard: [
            [{ text: "📚 Kurslar" }, { text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "ℹ️ Markaz haqida" }, { text: "💬 Fikr bildirish" }],
            [{ text: "❓ Yordam" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (text == "📚 Kurslar" || text == "⬅️ Orqaga") {
    bot.sendMessage(
      chatId,
      `
    🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:

1️⃣ Ingliz tili  
2️⃣ Rus tili  
3️⃣ Matematika  
4️⃣ Dasturlash (Python, Web)  
5️⃣ Grafik dizayn  

👇 Quyidagi kurslardan birini tanlang va batafsil ma’lumot oling:

    `,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
            [{ text: "🇷🇺 Rus tili", callback_data: "course_russian" }],
            [{ text: "🧮 Matematika", callback_data: "course_math" }],
            [{ text: "💻 Dasturlash", callback_data: "course_programming" }],
            [{ text: "🎨 Grafik dizayn", callback_data: "course_design" }],
          ],
        },
      }
    );
  } else if (text == "ℹ️ Markaz haqida") {
    // Example: O'quv markaz manzili (Tashkent)
    const latitude = 41.3781989;
    const longitude = 60.3694056;

    bot.sendMessage(chatId, "📍 Bizning o‘quv markaz joylashuvi:");
    bot.sendLocation(chatId, latitude, longitude);
  } else {
    bot.sendMessage(
      chatId,
      `
    ⚠️ Kechirasiz, men sizning xabaringizni tushunmadim.

Iltimos, quyidagi tugmani bosing 👇
/start
    `
    );
  }
});

bot.on("callback_query", (query) => {
  console.log(query);
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data == "course_english") {
    bot.sendMessage(
      chatId,
      `
    🇬🇧 Ingliz tili kursi haqida:

📆 Davomiyligi: 3 oy  
⏰ Darslar: Haftasiga 3 marta (1,5 soatdan)  
👨‍🏫 O‘qituvchi: Tajribali filologlar  
💰 Narxi: 350 000 so‘m / oy

✍️ Agar sizni bu kurs qiziqtirsa, “Ro‘yxatdan o‘tish” tugmasini bosing.

    `,
      {
        reply_markup: {
          keyboard: [
            [{ text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "⬅️ Orqaga" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (data == "course_russian") {
    bot.sendMessage(chatId, `Russian`);
  }

  // bot.sendMessage(chatId, data);
});
bot.on("callback_query", (query) => {
  console.log(query);
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data == "course_russian") {
    bot.sendMessage(
      chatId,
      `
     🇷🇺 Rus tili kursi haqida:

📆 Davomiyligi: 3 oy  
⏰ Darslar: Haftasiga 3 marta (1,5 soatdan)  
👨‍🏫 O‘qituvchi: Tajribali filologlar  
💰 Narxi: 250 000 so‘m / oy

✍️ Agar sizni bu kurs qiziqtirsa, “Ro‘yxatdan o‘tish” tugmasini bosing.

    `,
      {
        reply_markup: {
          keyboard: [
            [{ text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "⬅️ Orqaga" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (data == "course_russian") {
    bot.sendMessage(chatId, `Russian`);
  }

  // bot.sendMessage(chatId, data);
});

bot.on("callback_query", (query) => {
  console.log(query);
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data == "course_math") {
    bot.sendMessage(
      chatId,
      `
     🧮 Matematika kursi haqida:

📆 Davomiyligi: 3 oy  
⏰ Darslar: Haftasiga 3 marta (1,5 soatdan)  
👨‍🏫 O‘qituvchi: Tajribali filologlar  
💰 Narxi: 200 000 so‘m / oy

✍️ Agar sizni bu kurs qiziqtirsa, “Ro‘yxatdan o‘tish” tugmasini bosing.

    `,
      {
        reply_markup: {
          keyboard: [
            [{ text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "⬅️ Orqaga" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (data == "course_russian") {
    bot.sendMessage(chatId, `Russian`);
  }

  // bot.sendMessage(chatId, data);
});

bot.on("callback_query", (query) => {
  console.log(query);
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data == "course_programming") {
    bot.sendMessage(
      chatId,
      `
     💻 Dasturlash kursi haqida:

📆 Davomiyligi: 3 oy  
⏰ Darslar: Haftasiga 3 marta (1,5 soatdan)  
👨‍🏫 O‘qituvchi: Tajribali filologlar  
💰 Narxi: 380 000 so‘m / oy

✍️ Agar sizni bu kurs qiziqtirsa, “Ro‘yxatdan o‘tish” tugmasini bosing.

    `,
      {
        reply_markup: {
          keyboard: [
            [{ text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "⬅️ Orqaga" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (data == "course_russian") {
    bot.sendMessage(chatId, `Russian`);
  }

  // bot.sendMessage(chatId, data);
});


console.log("Bot ishga tushdi...");