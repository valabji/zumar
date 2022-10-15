type PricesItem = {
    basePrice: number
    prices: PriceOption[]
}

type PriceOption = {
    min: number
    max?: number | null
    price: number
}