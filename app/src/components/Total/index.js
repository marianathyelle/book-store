import React from 'react';
import PropTypes from 'prop-types';

import { PurchaseDetails } from './styles';

const Total = ({ totalDetails }) => (
  <div>
    <PurchaseDetails>
      <li>
        <span>Quantidade de Livros:</span>
        <span>{totalDetails.quantity}</span>
      </li>
      <li>
        <span>Valor total dos livros:</span>
        <span>R$ {totalDetails.price}</span>
      </li>
      <li>
        <span>Desconto:</span>
        <span> - R$ {totalDetails.discount}</span>
      </li>
      <li>
        <span>Total:</span>
        <span>R$ {totalDetails.total}</span>
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