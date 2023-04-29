import React from 'react'

export const CartItems = ({deleteProduct, removeProduct, cardItem, addProduct}) => {
  return (
    <>
        <div className='d-flex justify-content-between cart_card'>
            <div className='items_s1'>
                <div className='img_contain'>
                    <img src={cardItem.image} alt={cardItem.title} />
                </div>
            </div>
            <div className='items_s2'>
                <h4 className='fs-6 fw-bold mb-0'>{cardItem.title}</h4>
                <p className='fs-6 mb-0'>{cardItem.description.substring(0, 68)}...</p>
                <div className='d-flex justify-content-between'>
                    <p>Quantity: {cardItem.qty} <i className='fa fa-times'></i> <i className='fa fa-inr'></i>{cardItem.price}</p>
                    <p className='fs-bolder'><i className='fa fa-inr'></i> {(cardItem.qty * cardItem.price).toFixed(2)}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <span className='add_btn' onClick={()=>removeProduct(cardItem)}></span>
                    <span className='qty_display mx-3'>{cardItem.qty}</span>
                    <span className='remove_btn' onClick={()=>addProduct(cardItem)}></span>
                </div>
                <div className='text-danger fs-4 delete_btn' onClick={()=>deleteProduct(cardItem)}><i className='fa fa-trash'></i></div>
            </div>
        </div>
    </>
  )
}
