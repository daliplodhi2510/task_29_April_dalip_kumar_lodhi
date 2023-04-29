import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const SideModel = ({showModel, modelHandleClose}) => {
  return (
    <>
      <Modal show={showModel} onHide={()=>modelHandleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>modelHandleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>modelHandleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
