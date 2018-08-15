import React from 'react';
import PropTypes from 'prop-types';

import { PurchaseDetails } from './styles';

const Total = ({ totalDetails }) => (
  <div>
    <PurchaseDetails>
      <li>
        <span>Books Quantity:</span>
        <span>{totalDetails.quantity}</span>
      </li>
      <li>
        <span>Books total price:</span>
        <span>R$ {parseFloat(totalDetails.price).toFixed(2)}</span>
      </li>
      <li>
        <span>Discount:</span>
        <span> - R$ {parseFloat(totalDetails.discount).toFixed(2)}</span>
      </li>
      <li>
        <span>Total:</span>
        <span>R$ {parseFloat(totalDetails.total).toFixed(2)}</span>
      </li>
    </PurchaseDetails>
  </div>
);

Total.propTypes = {
  totalDetails: PropTypes.shape({
    quantity: PropTypes.number,
    price: PropTypes.number,
    discount: PropTypes.number,
    total: PropTypes.number,
  })
};

export default Total;