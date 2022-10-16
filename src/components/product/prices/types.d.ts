interface PricesItem {
  basePrice: number;
  prices: PriceOption[];
}

interface PriceOption {
  min: number;
  max: number | null;
  price: number;
}
