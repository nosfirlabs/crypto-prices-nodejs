class CryptocurrencyPrice {
  constructor() {}

  async getMoneroPrice() {
    try {
      // Make a request to a cryptocurrency API to get the current price of Monero
      const response = await fetch("https://api.cryptonator.com/api/ticker/xmr-usd");
      const data = await response.json();
      return data.ticker.price;
    } catch (error) {
      console.error(error);
    }
  }

  async getBitcoinPrice() {
    try {
      // Make a request to a cryptocurrency API to get the current price of Bitcoin
      const response = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
      const data = await response.json();
      return data.ticker.price;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CryptocurrencyPrice;
