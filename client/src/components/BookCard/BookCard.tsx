import { FC } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { toggleModal } from '../../features/alertModalSlice'

import './bookCard.scss'

import { bookType } from '../../typings/book';

const BookCard: FC<bookType> = ({
 title,
 desc,
 cover,
 id
}) => {

  const dispatch = useDispatch()

  return (
    <Card style={{ width: '18rem' }} className="bookCard__container">
      <Card.Img variant="top" src={cover} className='bookCard__image' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='bookCard__description'>
          {desc}
        </Card.Text>
        <div className="bookCard__buttonsRow">
         <Link to={`/update/${id}`}><Button variant="info" size="sm" className="bookCard__button"  >Edit</Button></Link> 
          <Button 
          variant="outline-danger" 
          size="sm" 
          className="bookCard__button"
          onClick={()=>{dispatch(toggleModal({show: true, bookToDeleteId: id}))}}
          >Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BookCard;