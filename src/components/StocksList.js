import React from 'react';
import PropTypes from 'prop-types';
import StockItem from './StockItem';

const StocksList = (props) => {
  const {
    stocks, deleteStockProps,
  } = props;
  return (
    <ul>
      {stocks.map((stock) => (
        <StockItem
          key={stock.id}
          stock={stock}
          deleteStockProps={deleteStockProps}
        />
      ))}
    </ul>
  );
};

StocksList.propTypes = {
  stocks: PropTypes.string.isRequired,
  deleteStockProps: PropTypes.func.isRequired,
};

export default StocksList;
