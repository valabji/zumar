interface shippingItem {
  onChange: (price: number) => void;
}
interface ShippingOption {
  name: string;
  price: number;
  etaMin: number;
  etaMax: number;
  selected: boolean;
  onClick: () => void;
}
