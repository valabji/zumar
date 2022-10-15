import { useParams } from 'react-router-dom'
import product from '../database/product.json'
import categories from '../database/categories.json'
import { useEffect, useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import '../style/pages/productPage.scss'
import {
  Variant,
  Prices,
  Images,
  StarRating,
  Quantity,
  Shipping,
} from '../components/product'
import price from '../components/product/prices/price'
import formatPrice from '../utils/formatPrice'
import { useAppDispatch } from '../store/hooks'
import { addToCart } from '../store/cart'
export default function () {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const [variants, setVariants] = useState<
    { name: string; value: VariantOption }[]
  >([])
  const [quantityPrice, setQuantityPrice] = useState(0)
  const [shippingPrice, setShippingPrice] = useState(0)
  const [variantsPrice, setVariantsPrice] = useState(0)
  const countVariantsPrice = () => {
    let tempvariantsPrice = 0
    variants.forEach((v) => {
      tempvariantsPrice += v.value.price
    })
    setVariantsPrice(tempvariantsPrice)
  }
  return (
    <div className="container">
      <Breadcrumb id={product.categoryID} />
      <div className="product-container">
        <p className="product-name-mobile">{product.name}</p>
        <div className="product-rating-mobile">
          <span className="product-code">
            {'Product Code:  ' + product.code}
          </span>
          <span className="product-rating-container">
            <StarRating rate={product.rate} />
            <span className="product-rating-rate">{product.rate}</span>
            <span className="product-rating-ratings">
              {'(' + product.ratings + ')'}
            </span>
          </span>
        </div>
        <Images thumbnail={product.thumbnail} images={product.images} />
        <div className="details">
          <p className="product-name">{product.name}</p>
          <div className="product-rating">
            <span className="product-code">
              {'Product Code:  ' + product.code}
            </span>
            <span className="product-rating-container">
              <StarRating rate={product.rate} />
              <span className="product-rating-rate">{product.rate}</span>
              <span className="product-rating-ratings">
                {'(' + product.ratings + ')'}
              </span>
            </span>
          </div>
          <Prices basePrice={product.basePrice} prices={product.prices} />
          {product.variants.map((variantItem) => {
            return (
              <Variant
                name={variantItem.name}
                defaultOption={variantItem.defaultOption}
                optionFontWeight={variantItem.optionFontWeight}
                optionFontSize={variantItem.optionFontSize}
                fontSize={variantItem.fontSize}
                fontWeight={variantItem.fontWeight}
                options={variantItem.options}
                onChange={(option) => {
                  let variantIndex = null
                  let tmpVariants = variants
                  for (let i = 0; i < variants.length; i++) {
                    if (variantItem.name == variants[i].name) {
                      variantIndex = i
                    }
                  }
                  if (variantIndex) {
                    tmpVariants[variantIndex] = {
                      name: variantItem.name,
                      value: option,
                    }
                  } else {
                    tmpVariants.push({ name: variantItem.name, value: option })
                  }
                  setVariants(tmpVariants)
                  countVariantsPrice()
                }}
                text={variantItem.text}
              />
            )
          })}
          <Quantity
            onChange={(price) => {
              setQuantityPrice(price)
            }}
            basePrice={product.basePrice}
            prices={product.prices}
            stock={product.stock}
            variantsPrice={variantsPrice}
          />
          <Shipping onChange={(price) => {setShippingPrice(price)}} />
          <p className="product-total">
            Total{' '}
            <span className="product-total-price">{formatPrice(quantityPrice+shippingPrice, 0)}</span>
          </p>
          <div className="product-buttons">
            <span
              onClick={() => {
                dispatch(addToCart(product.name))
              }}
              className="btn"
            >
              <span>Place order now</span>
            </span>
            <a href="tel:+201098458363" className="btn call">
              <img
                src="/imgs/phone.svg"
                style={{ height: 24, marginRight: 10 }}
              />
              <span>Call us</span>
            </a>
            <span className="text">We are 24/7 available</span>
          </div>
        </div>
      </div>
    </div>
  )
}
