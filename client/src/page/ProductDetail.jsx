import React from 'react'
import { useLocation, useParams } from 'react-router'

function ProductDetail() {
const location =useParams();

    return (
    <div>{location.id}</div>
  )
}

export default ProductDetail