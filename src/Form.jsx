import React, { useState } from 'react'

const Form = (props) => {
  const [student,setStudent]=useState(props.data)
  let changeFormData=(event)=>{
    const {name,value}=event.target;
    setStudent({...student ,[name]:value})
  }
  return (
    <div className='form-overlay'>
      <form>
        <div className='form-overlay'>
          <label>Name:</label>
          <input className='form-control mt-2' type='text' value={student.name} onChange={changeFormData} name='name' placeholder='student Name'/>

        </div>
        <div className='form-overlay'>
          <label>Class:</label>
          <input className='form-control mt-2' type='number' value={student.class} name='class' onChange={changeFormData} placeholder=' Enter class'/>

        </div>
        <button className='btn btn-primary float-end ' onClick={(e)=>{e.preventDefault();
          props.addStudent(student)
        }}>Send</button>
        <button className='btn btn-danger float-end' onClick={(e)=>{e.preventDefault() ;
          props.closeForm()
        }}>Cancel</button>
      </form>
        
      
    </div>
  )
}

export default Form
