import React from 'react'
import './Card.scss'
import BuyBtn from './BuyBtn'


function ProductCard({ product }) {
  return (
    <div className='card'>
      <h2 className='card'>{product.title}</h2>
      <p className="card__description">{product.description}</p>
      <h3 className="card__price">{product.price}</h3>
      <BuyBtn product={product}/>
    </div>
  )
}

export default ProductCard