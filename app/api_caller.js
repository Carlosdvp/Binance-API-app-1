/* 

IMPORTANT 
----------

this is a NodeJS file -- to be run on the backend and not in the browser

*/ 

// the dependencies

require('dotenv').config();

const axios = require('axios');
const crypto = require('crypto');
const qs = require('qs');
const WebSocket = require('ws');

/*********    using  AXIOS to consume the Binance API directly    ********/


// Base API URLs
const baseUrl = 'https://testnet.binance.vision';

// Helpers
const config = {
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET
}

var timestamp = Date.now();

// variables for useful endpoints
// public APi
let serverTime = '/api/v3/time';
let BTC_USDT = '/api/v3/ticker/price?symbol=BTCUSDT';
let exchangeInfo = '/api/v3/exchangeInfo';

// Private APi -- requires the signed api call
let accountInfo = '/api/v3/account';
let allCoinsInfo = '/sapi/v1/capital/config/getall';
var snapshot = '/sapi/v1/accountSnapshot';

// the endpoint we will use for a specific call
var endpoint = accountInfo;
    

// signature creation function
function signature(query_string) {
    return crypto
        .createHmac('sha256', config.API_SECRET)
        .update(query_string)
        .digest('hex');
};


// Query string creation
const dataQueryString = 'recvWindow=15000&timestamp=' + timestamp;
const signed = signature(dataQueryString);
const signedReq = '&signature=' + signed;

var querystring = `${'?'}${dataQueryString}${signedReq}`;

// craft the complete URL with the signature
// following is the old way, keeping because it is very clear
// var url = baseUrl + endpoint + '?' + dataQueryString + '&signature=' + signed;
var url = `${baseUrl}${endpoint}${querystring}`;


// the API call -- success!!!
axios.get(url, {
  headers: {
    'X-MBX-APIKEY': config.API_KEY
  }
})
  .then(response => {
    console.log(response.data)
    // return response;
  }).catch(err => {
    console.log(err)
  });


//
// Now we need to get some cadlestick data to initialize the charts













// the historical data we can use for the backtesting was downloaded for ETH from a different source.