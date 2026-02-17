import React, { useEffect, useState } from 'react'
import ProductList from './productList.jsx'
import './App.css'


export default function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
  })
  .catch((err) => {
    console.error('error fetching products: ', err)
  })
} 
  , [])

  return (
    <div className='app'>
      <h1 className='heading'>Product List</h1>
      {products.length===0 ? (
        <p>No products available</p>
      ) : (
        <ProductList products={products} />
      )
    }
    </div>
  )

}