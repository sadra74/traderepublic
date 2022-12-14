import React from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './StockItem.module.css';

const StockItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const {
    stock, deleteStockProps,
  } = props;

  const viewMode = {};

  return (
    <li className={styles.item}>
      <div style={viewMode}>
        <button type="submit" onClick={() => deleteStockProps(stock.id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span style={stock.completed ? completedStyle : null}>{stock.title}</span>
          {' '}
          <span style={stock.completed ? completedStyle : null}>
            price:
            {stock?.data?.price}
          </span>
          {' '}
          <span style={stock.completed ? completedStyle : null}>
            bid:
            {stock?.data?.bid}
          </span>
          {' '}
          <span style={stock.completed ? completedStyle : null}>
            ask:
            {stock?.data?.ask}
          </span>
        </div>
      </div>
    </li>
  );
};

StockItem.propTypes = {
  stock: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.any,
  }).isRequired,
  deleteStockProps: PropTypes.func.isRequired,
};

export default StockItem;
