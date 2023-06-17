import { FC } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useDispatch } from 'react-redux';
import { createNewBook } from '../../features/bookSlice';

import './newBookForm.scss'

const NewBookForm: FC = () => {

    const dispatch = useDispatch()
  
    const handleSubmit = async(e:any) =>{
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const formData = new FormData(form);
        
        const title = formData.get('title') as string;
        const desc = formData.get('desc') as string;
        const cover = formData.get('cover') as string;

        await dispatch( createNewBook({ title:title, desc:desc, cover:cover }) as any);

        form.reset()
    }
  
    return (
    <Form onSubmit={handleSubmit} className="createBookForm__container">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Book Title</Form.Label>
        <Form.Control name="title" type="text" placeholder="Title..." />
        <Form.Label>Book Description</Form.Label>
        <Form.Control name="desc" type="text" placeholder="Description..." />
        <Form.Label>Book Cover</Form.Label>
        <Form.Control name="cover" type="text" placeholder="Image url" />
      </Form.Group>
      <Button type="submit" variant="info">Submit</Button>
    </Form>
  );
}

export default NewBookForm;