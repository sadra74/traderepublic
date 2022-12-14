import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import useWebSocket from 'react-use-websocket';
import Header from './Header';
import InputStock from './InputStock';
import StocksList from './StocksList';
import WebSocketDemo from './WebSocketDemo';

const StockContainer = () => {
  const [stocks, setStocks] = useState([]);
  const [socketUrl] = useState('ws://192.168.1.111:8425/');
  const { readyState, sendMessage, lastMessage } = useWebSocket(socketUrl);
  const delStock = (id) => {
    setStocks([...stocks.filter((stock) => stock.id !== id)]);
    sendMessage(JSON.stringify({
      unsubscribe: `${stocks.find((stock) => stock.id === id).title}`,
    }));
  };

  const addStockItem = (title) => {
    if (!stocks.find((stock) => stock.title === title)) {
      const newStock = {
        id: uuidv4(),
        title,
        completed: false,
      };
      sendMessage(JSON.stringify({
        subscribe: `${title}`,
      }));
      setStocks([...stocks, newStock]);
    }
  };

  useEffect(() => {
    if (lastMessage) {
      const data = JSON.parse(lastMessage.data);
      const stock = stocks.find((stock) => stock.title === data.isin);
      if (stock) {
        stock.data = data;
      }
    }
  }, [lastMessage, stocks]);

  return (
    <div className="container">
      <div className="inner">
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Header />
                <WebSocketDemo
                  readyState={readyState}
                />
                <InputStock addStockProps={addStockItem} />
                <StocksList
                  stocks={stocks}
                  deleteStockProps={delStock}
                />
              </>
            )}
          />
        </Routes>
      </div>
    </div>
  );
};

export default StockContainer;
