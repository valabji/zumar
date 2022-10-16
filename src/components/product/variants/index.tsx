import React, { useState, ReactElement } from 'react';
import VariantOption from './variantOption';
import '../../../style/components/product-variants.scss';
export default function variant(variant: Variant): ReactElement {
  const [selectedOption, setSelectedOption] = useState(variant.options[variant.defaultOption]);
  variant.onChange(selectedOption);
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
          const isSelected = option === selectedOption;
          return (
            <VariantOption
              key={Math.random()}
              value={option.value}
              selected={isSelected}
              onClick={() => {
                setSelectedOption(option);
              }}
              fontWeight={variant.optionFontWeight}
              fontSize={variant.optionFontSize}
              unit={option.unit}
              thumbnail={option.thumbnail}
              price={option.price}
            />
          );
        })}
      </div>
    </div>
  );
}
