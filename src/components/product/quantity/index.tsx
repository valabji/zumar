import React, { useState, ReactElement } from 'react';
import formatPrice from '../../../utils/formatPrice';
import '../../../style/components/product-quantity.scss';

export default function quantity({
  onChange,
  basePrice,
  prices,
  stock,
  variantsPrice
}: quantityItem): ReactElement {
  const [quantity, setQuantity] = useState(1);
  const tmpPrices = [];
  const newBasePrice: PriceOption = { price: basePrice, min: 1, max: null };
  tmpPrices.push(newBasePrice);
  prices.forEach((e) => {
    tmpPrices.push(e);
  });
  let currentQuotation = 0;
  for (let i = 0; i < tmpPrices.length; i++) {
    if (quantity >= tmpPrices[i].min) {
      currentQuotation = i;
    }
  }
  const total = (tmpPrices[currentQuotation].price + variantsPrice) * quantity;
  onChange(total);
  return (
    <div className="product-quantity">
      <div className="product-quantity-name">
        Quantity <span className="product-quantity-price">{formatPrice(total, 0)}</span>
      </div>
      <div className="product-quantity-options">
        <span
          onClick={() => {
            quantity !== 1 && setQuantity(quantity - 1);
          }}
          className={`${
            quantity !== 1 ? 'btn active' : ''
          } product-quantity-btn product-quantity-minus`}
        >
          <img src="/imgs/minus.svg" width={16} />
        </span>
        <span
          onClick={() => {
            quantity !== stock && setQuantity(quantity + 1);
          }}
          className={`${
            quantity !== stock ? 'btn active' : ''
          } product-quantity-btn product-quantity-plus`}
        >
          <img src="/imgs/plus.svg" width={16} />
        </span>
        <span className="product-quantity-value">{quantity} Pieces</span>
      </div>
    </div>
  );
}
