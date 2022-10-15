type Variant = {
    name: string
    text: string
    fontWeight: string
    fontSize: string
    defaultOption: number
    optionFontWeight: string
    optionFontSize: string
    options: VariantOption[]
    onChange: (option:VariantOption)=>void
}
type VariantOption = {
    value: string
    unit: string
    price: number
    fontWeight?: string
    fontSize?: string
    selected?: boolean
    thumbnail: string
    onClick?: () => void;
}