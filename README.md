
# Binance Exchange Bot

# Testnet API info

HMAC_SHA256 Key registered

test_key2





****************************************************************************************************

# From the Tutorial Readme

## Binance Part 1 - Websockets and Real-Time Lightweight Charts

- What is binance and how does it compare to other exchanges?
- Why crypto? Open on nights and weekends, learn new things by doing
- wscat - connect to websocket from the command line

- base endpoint for the websocket -- the testnet one for now
	-- wss://testnet.binance.vision/ws

		-- from the tutorial (wss://stream.binance.com:9443/ws/btcusdt@trade)

- capture output to a file
- connect to websocket from the Web / JavaScript
- Lightweight Charts - create real-time candlestick chart similar to TradingView
- UI for to check indicators (eg. RSI), configure values, configure alerts/nofications

## Binance Part 2 - Technical Analysis with Python and TALib

- connect to websockets from Python, write candlestick data to CSV
- download some historical data using a REST API
- install TALib, try out some indicators on a dataset

## Binance Part 3 - Backtesting with Backtrader and TALib Indicators

- test some indicators against a historical dataset
- plot some pretty charts with buy and sell points, results

## Binance Part 4 - Building an API for indicator settings

- API endpoint to save / persist indicator and notification settings
- Using settings from Python websocket processor
- API endpoint for executing a buy order
- API endpoint for sending notification

## Binance Part 5 - Finishing up

- Add stuff to UI

-----------------------------------------------------------------------------------------

## Steps overview

1. Use simple js code to connect to the Binance websocket and stream some data (BTC 5 min)
2. Crate a simple front end and get the data to be shown on the page
3. Once we have that working, add the lightweight chart to the page, and get it to render properly
4. Add some UI fields for some customizarion (using the RSI indicator for the example)

5. Then the backend stuff
6. 

------------------------------------------------------------------------------------------

# Part 1

- websocket: wss://stream.binance.com:9443/ws
- Testnet websocket: wss://testnet.binance.vision/ws

- wss://testnet.binance.vision/ws/btcusdt@kline_5m

{
	"e":"kline",
	"E":1626457502492,
	"s":"BTCUSDT",
	"k":
		{
			"t":1626457500000,
			"T":1626457799999,
			"s":"BTCUSDT",
			"i":"5m",
			"f":669865,
			"L":669866,
			"o":"32012.58000000",
			"c":"32011.91000000",
			"h":"32012.58000000",
			"l":"32011.91000000",
			"v":"0.03123600",
			"n":2,
			"x":false,
			"q":"999.93448482",
			"V":"0.03123600",
			"Q":"999.93448482",
			"B":"0"
		}
} 

- Lightweight charts

https://www.tradingview.com/lightweight-charts/

https://www.npmjs.com/package/lightweight-charts



## for the backend I used NodeJS

- used the following libraries

- this seems kind of incomplete
https://github.com/jaggedsoft/node-binance-api#readme


- this one seems better, although it is very limited in scope as well.
https://github.com/binance-exchange/binance-api-node