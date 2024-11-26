const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/helloworld', { useNewUrlParser: true, useUnifiedTopology: true });
const QuoteSchema = new mongoose.Schema({ quote: String });
const Quote = mongoose.model('Quote', QuoteSchema);

app.get('/data', async (req, res) => {
  const quotes = await Quote.find();
  res.json({
    helloWorld: "Hello World",
    color: "blue",
    quote: quotes[0]?.quote || "Default Quote", //fetching status -- umm lets see
    font: "Arial",
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
