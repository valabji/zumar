import React, { ReactElement } from 'react'
export default function shippingOption (option: ShippingOption): ReactElement {
  return (
    <span onClick={option.onClick} className={`product-shipping-item ${option.selected ? 'selected' : ''}`}>
      <span
       className={'product-shipping-item-value'}
      >
        {option.name}
      </span>
      <span className="product-shipping-item-eta">{'Estimated ' + option.etaMin.toString() + ' - ' + option.etaMax.toString() + ' days'}</span>
    </span>
  )
}
