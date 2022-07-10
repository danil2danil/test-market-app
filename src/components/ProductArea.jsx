import React from 'react'
import Card from './Card'
import './ProductArea.scss'

function ProductArea({ products }) {

  const productList = products.map((product) => {
    return (
      <Card key={Math.random()} product={product} />
    );
  })

  return (
    <>
    <div className="product-area">
      {productList}
    </div>
    </>
  )
}

export default ProductArea