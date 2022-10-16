interface quantityItem {
  onChange: (price: number) => void
  prices: PriceOption[]
  basePrice: number
  stock: number
  variantsPrice: number
}
