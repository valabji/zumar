import formatPrice from "../../../utils/formatPrice";
import "../../../style/components/product-shipping.scss"
import { useState } from "react";
import shipping from "../../../database/shipping.json"
import ShippingOption from "./shippingOption";
export default function ({ onChange }: shippingItem) {
    const [selectedOption,setSelectedOption]=useState(shipping[1])
    onChange(selectedOption.price)
  return (
    <div className="product-shipping">
      <div className="product-shipping-name">Shipping <span className="product-shipping-price">{formatPrice(selectedOption.price,0)}</span></div>
      <div className="product-shipping-options">
        {
          shipping.map((option)=>{
            let isSelected = option == selectedOption
            return <ShippingOption name={option.name} price={option.price} etaMax={option.etaMax} selected={isSelected} onClick={()=>{setSelectedOption(option)}} etaMin={option.etaMin} />
        })
        }
      </div>
    </div>
  )
}
