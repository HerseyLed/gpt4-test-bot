const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/webhook", async (req, res) => {
  const prompt = req.body.queryResult?.queryText || "Merhaba";

  console.log("✅ Webhook çağrıldı. Mesaj:", prompt);

  const reply = `🧠 GPT-4 test yanıtı: "${prompt}" mesajını aldım. Her şey çalışıyor!`;

  return res.json({
    fulfillmentText: reply
  });
});

app.get("/", (req, res) => {
  res.send("🟢 GPT4 Test Webhook aktif.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🟢 Sunucu ${PORT} portunda çalışıyor`);
});