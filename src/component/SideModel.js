import Modal from 'react-bootstrap/Modal';
import {CartItems} from './'

export const SideModel = ({deleteProduct, removeProduct, addProduct, addItem, totalAmount, totalCount, showModel, modelHandleClose}) => {
  return (
    <>
      <Modal show={showModel} onHide={()=>modelHandleClose()} className='p-0'>
        <Modal.Header closeButton>
          <Modal.Title>Carting Items({totalCount})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='cart-items'>
            {
              addItem.map((item)=>{
                return <CartItems key={item.id} cardItem={item} addProduct={addProduct} removeProduct={removeProduct} deleteProduct={deleteProduct} />
              })
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-between w-100'>
            <p className='fs-6 fs-bold'>Total Amount</p>
            <p className='fs-5 fs-bold'>{totalAmount.toFixed(2)}</p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
