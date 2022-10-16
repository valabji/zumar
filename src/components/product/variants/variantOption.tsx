import React, { ReactElement } from 'react'
export default function variantOption (option: VariantOption): ReactElement {
  return (
    <span onClick={option.onClick} className={`product-variant-item ${option.selected ? 'selected' : ''}`}>
      {option.thumbnail !== '' && (
        <img src={option.thumbnail} className="product-variant-item-image" />
      )}

      <span
       className={`product-variant-item-value ${option.thumbnail !== '' ? '' : 'noImage'}`}
        style={{ fontWeight: option.fontWeight, fontSize: option.fontSize }}
      >
        {option.value}
        <span className="product-variant-item-unit">{option.unit}</span>
      </span>
    </span>
  )
}
