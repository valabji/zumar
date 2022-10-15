export default function (option: ShippingOption) {
  return (
    <span onClick={option.onClick} className={`product-shipping-item ${option.selected?"selected":""}`}>
      <span
       className={`product-shipping-item-value`}
      >
        {option.name}
      </span>
      <span className="product-shipping-item-eta">{"Estimated "+option.etaMin+" - "+option.etaMax+" days"}</span>
    </span>
  )
}
