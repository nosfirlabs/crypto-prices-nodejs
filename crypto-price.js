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
  // extra
  
    async getEthereumPrice() {
    try {
      // Make a request to a cryptocurrency API to get the current price of Ethereum
      const response = await fetch("https://api.cryptonator.com/api/ticker/eth-usd");
      const data = await response.json();
      return data.ticker.price;
    } catch (error) {
      console.error(error);
    }
  }

  async getLitecoinPrice() {
    try {
      // Make a request to a cryptocurrency API to get the current price of Litecoin
      const response = await fetch("https://api.cryptonator.com/api/ticker/ltc-usd");
      const data = await response.json();
      return data.ticker.price;
    } catch (error) {
      console.error(error);
    }
  }

  async getRipplePrice() {
    try {
      // Make a request to a cryptocurrency API to get the current price of Ripple
      const response = await fetch("https://api.cryptonator.com/api/ticker/xrp-usd");
      const data = await response.json();
      return data.ticker.price;
    } catch (error) {
      console.error(error);
    }
  }

  async getStellarPrice() {
    try {
      // Make a request to a cryptocurrency API to get the current price of Stellar
      const response = await fetch("https://api.cryptonator.com/api/ticker/xlm-usd");
      const data = await response.json();
      return data.ticker.price;
    } catch (error) {
      console.error(error);
    }
  }

  async getTetherPrice() {
    try {
      // Make a request to a cryptocurrency API to get the current price of Tether
      const response = await fetch("https://api.cryptonator.com/api/ticker/usdt-usd");
      const data = await response.json();
      return data.ticker.price;
    } catch (error) {
      console.error(error);
    }
  }

  
}

module.exports = CryptocurrencyPrice;
