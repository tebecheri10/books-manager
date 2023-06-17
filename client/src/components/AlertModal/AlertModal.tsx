import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../../features/alertModalSlice'
import { deleteBook } from '../../features/bookSlice';
import { RootState } from '../../store/store';

import './alertModal.scss'

function AlertModal() {

  const dispatch = useDispatch()

  const modalState = useSelector((state: RootState)=> state.alertModal)

  const handleDelete = async() =>{
    await dispatch(deleteBook(modalState.bookToDeleteId) as any)

    dispatch(toggleModal(false))
  }

  return (
    <>
      <Modal show={modalState.show} onHide={()=>{dispatch(toggleModal(false))}}>
        <Modal.Header closeButton>
          <Modal.Title>Attention!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="alertModal__body">Are you sure you want to delete this book?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;