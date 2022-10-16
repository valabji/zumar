import React, { ReactElement } from 'react'
export default function starRating ({ rate }: RateItem): ReactElement {
  const stars: boolean[] = []
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rate)) {
      stars.push(true)
    } else {
      stars.push(false)
    }
  }
  return (
    <span style={{ width: 132, display: 'inline-flex', justifyContent: 'space-between' }}>
        {stars.map(star => <img key={Math.random()} src={star ? '/imgs/Star.svg' : '/imgs/Star-O.svg'} />)}
    </span>
  )
}
