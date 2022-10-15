import formatPrice from "../../../utils/formatPrice"

export default function ({price,min,max}:PriceOption) {
   const pieces = max?`${min} - ${max} pieces`:`${min}+ pieces`
  return (
    <div className="product-prices-item">
      <p className="product-prices-item-title">{pieces}</p>
      <p className="product-prices-item-price">{formatPrice(price)}</p>
    </div>
  )
}
