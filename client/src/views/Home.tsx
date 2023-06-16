import { FC, useEffect } from 'react'
import BookCard from '../components/BookCard'
import { useSelector, useDispatch } from 'react-redux'
import { getBooks } from '../features/bookSlice'

const Home: FC = () => {

 const dispatch =  useDispatch() 
 const bookState = useSelector(( state: any) => state.bookReducer)

useEffect(()=>{
  dispatch(getBooks() as any)
}, [])

 console.log("bookState", bookState)

  return (
    <div>
      <BookCard/>
    </div>
  )
}

export default Home