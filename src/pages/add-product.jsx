import ProductForm from '../components/product/ProductForm'
import React from 'react'
import axios from 'axios'

const AddProduct = () => {
  const Submit=(data)=>{
    axios
    .post('http://localhost:8000/products',data)
  }
  return (
    <div className="card">
      <div className="card-header">افزودن محصول</div>
      <div className="card-body">
        <ProductForm onSubmit={Submit}/>
      </div>
    </div>
  )
}

export default AddProduct
