import React,{useState} from 'react'
import './body.css'
import Form from '../models/Form'
import Quiz from '../models/Quiz'
const Body = () => {
    const [currentPage, setPage] = useState(0)
    function showFormSection(){
        if (currentPage === 0 ) {
            return <Form page={currentPage} setPage={setPage}/>
        }else if (currentPage === 1 ){
            return <Quiz/>
        }
    }
  return (
    <div className='quiz__container'>
       {showFormSection()}
    </div>
  )
}

export default Body