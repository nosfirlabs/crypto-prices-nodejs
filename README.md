# crypto-prices-nodejs
*Here is an example of a Node.js class that has two functions for getting the current price of Monero and Bitcoin*


### To use this class, you can import it in your code and create an instance of it:

    const CryptocurrencyPrice = require("./CryptocurrencyPrice");
    
    const price = new CryptocurrencyPrice();
    
    // Get the current price of Monero
    const moneroPrice = await price.getMoneroPrice();
    
    // Get the current price of Bitcoin
    const bitcoinPrice = await price.getBitcoinPrice();

Note that both `getMoneroPrice` and `getBitcoinPrice` are asynchronous functions, so you will need to use the `await` keyword when calling them.
