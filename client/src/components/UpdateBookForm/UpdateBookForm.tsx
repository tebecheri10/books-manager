import { FC } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookById, setBookToUpdate } from '../../features/bookSlice';


import './updateBookForm.scss';

const UpdateBookForm: FC = () => {

    const navigate = useNavigate()

    const { id } = useParams()
    const dispatch = useDispatch()
    const bookState = useSelector((state:any)=> state.books)
  
    const handleSubmit = async(e:any) =>{
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form);
        
        const title = formData.get('title') as string;
        const desc = formData.get('desc') as string;
        const cover = formData.get('cover') as string;

        if (id) {
          await dispatch(
            updateBookById({ bookData: { title, desc, cover }, bookId: id }) as any
          );
          
          navigate("/")
        }

    }
  
    return (
    <Form onSubmit={handleSubmit} className="createBookForm__container">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Book Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="Title..." value={bookState.updateBookContext.title} onChange={(e)=>dispatch(setBookToUpdate(e.target.value))}/>
        <Form.Label>Book Description</Form.Label>
        <Form.Control name="desc" type="text" placeholder="Description..." value={bookState.updateBookContext.desc} onChange={(e)=>dispatch(setBookToUpdate(e.target.value))}/>
        <Form.Label>Book Cover</Form.Label>
        <Form.Control name="cover" type="text" placeholder="Image url" value={bookState.updateBookContext.cover} onChange={(e)=>dispatch(setBookToUpdate(e.target.value))} />
      </Form.Group>
      <Button type="submit" variant="info">Submit</Button>
    </Form>
  );
}

export default UpdateBookForm;