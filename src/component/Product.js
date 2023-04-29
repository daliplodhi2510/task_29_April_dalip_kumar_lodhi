import React from 'react'

export const Product = ({products, addProduct}) => {
  return (
    <div className='col-md-4 col-lg-3 mb-4'>
        <div className="card products">
            <div className="card_img">
                <img src={products.image} className="card-img-top" alt={products.title} />
            </div>
            <div className="card-body">
                <h5 className="card-title mb-0 fs-5">{products.title.substring(0,16)}</h5>
                <p className="card-text fs-6 mb-0">{products.description.substring(0,24)}</p>
                <div className='d-flex justify-content-between my-3'>
                    <p className="card-text fs-5 fw-bold mb-0"><i className='fa fa-inr'></i> {products.price}</p>
                    <p className="card-text fs-6">Rating {products.rating && products.rating.rate}<i className='fa fa-star'></i></p>
                </div>
                <button className='btn btn-outline-success w-100 me-2' onClick={()=>addProduct(products)}><i className='fa fa-shopping-cart'></i> ADD</button>
            </div>
        </div>
    </div>
  )
}
