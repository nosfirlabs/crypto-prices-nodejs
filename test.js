const CryptocurrencyPrice = require("./CryptocurrencyPrice");

const price = new CryptocurrencyPrice();

// Get the current price of Monero
const moneroPrice = await price.getMoneroPrice();

// Get the current price of Bitcoin
const bitcoinPrice = await price.getBitcoinPrice();
