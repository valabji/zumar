type shippingItem = {
    onChange: (price:number)=>void
}
type ShippingOption = {
    name: string
    price: number
    etaMin: number
    etaMax: number
    selected?: boolean
    onClick: () => void;
}