import VariantOption from './variantOption'
import '../../../style/components/product-variants.scss'
import { useState } from 'react'
export default function (variant: Variant) {
  const [selectedOption, setSelectedOption] = useState(
    variant.options[variant.defaultOption],
  )
  variant.onChange(selectedOption)
  return (
    <div className="product-variant">
      <div
        className="product-variant-name"
        style={{ fontWeight: variant.fontWeight, fontSize: variant.fontSize }}
      >
        {variant.text}
      </div>
      <div className="product-variant-options">
        {variant.options.map((option) => {
          let isSelected = option == selectedOption
          return (
            <VariantOption
              value={option.value}
              selected={isSelected}
              onClick={() => {
                setSelectedOption(option)
              }}
              fontWeight={variant.optionFontWeight}
              fontSize={variant.optionFontSize}
              unit={option.unit}
              thumbnail={option.thumbnail}
              price={option.price}
            />
          )
        })}
      </div>
    </div>
  )
}
