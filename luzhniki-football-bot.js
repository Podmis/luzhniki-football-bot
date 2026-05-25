async function CreatePoll() {
    const BOT_TOKEN = process.env.Bot_Token;
    const CHAT_ID = process.env.Chat_Id;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: 'Hello from bot'
        })
    });
}

CreatePoll();
