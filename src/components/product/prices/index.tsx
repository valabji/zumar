import Price from "./price";
import "../../../style/components/product-prices.scss"
import price from "./price";
export default function ({basePrice,prices}:PricesItem) {
    for(let i=0;i<prices.length;i++){
        if(i!=prices.length-1){
            prices[i].max = prices[i+1].min - 1
        }else{
            prices[i].max = null
        }
    }
  return (
    <div className="product-prices">
        <Price price={basePrice} min={1} max={prices.length>0?prices[0].min - 1:null} />
        {prices.map(price=><Price price={price.price} min={price.min} max={price.max}/>)}
    </div>
  )
}
