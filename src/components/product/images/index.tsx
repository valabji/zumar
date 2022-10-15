import { useState } from 'react'
import '../../../style/components/product-images.scss'

export default function ({ thumbnail, images }: ProductImages) {
  const [selected, setSelected] = useState(thumbnail)
  return (
    <div className="images">
      <img src={selected} className="thumbnail" />
      <div className="image-thumbnails-container">
        <div className="image-thumbnails-flex-container">
          {images.map((image) => (
            <img src={image==selected?thumbnail:image} onClick={()=>{setSelected(image==selected?thumbnail:image)}} className="btn image-thumbnail" />
          ))}
        </div>
      </div>
    </div>
  )
}
