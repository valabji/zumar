import React, { ReactElement } from 'react';
import { emptyCart } from '../store/cart';
import { useAppDispatch } from '../store/hooks';

export default function cartPage(): ReactElement {
  const dispatch = useAppDispatch();
  return (
    <div className="container">
      <h1>Cart Page</h1>
      <h3
        className="btn"
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Clear Cart
      </h3>
    </div>
  );
}
