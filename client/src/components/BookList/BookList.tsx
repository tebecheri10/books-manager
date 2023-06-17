    import { useEffect } from 'react'
    import { useDispatch, useSelector } from 'react-redux'
    import { getBooks } from '../../features/bookSlice'
    import BookCard from '../BookCard/BookCard'
    
    import './bookList.scss'

    const BookList = () => {
        const dispatch = useDispatch()
        
        useEffect(()=>{
            dispatch(getBooks() as any)
        }, [])
        
        const bookState = useSelector((state: any)=> state.books)
        
        return (
        <div className="bookList__container">
            {
             bookState.booksList.length > 0 &&
             bookState.booksList &&
             bookState.booksList.map((bookData:any)=>(
                 <BookCard
                  key={bookData.id}
                  title={bookData.title}
                  desc={bookData.desc}
                  cover={bookData.cover}
                  id={bookData.id}
                 />
             ))
            }
        </div>
      )
    }
    
    export default BookList