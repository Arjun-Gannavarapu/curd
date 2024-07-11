
import './App.css';
import Table from './Table';
import Form from './Form'
import {getData,deleteData,postData,putData} from './api'
import { useEffect, useState } from 'react';

function App() {
  const [user,setUser]=useState([])
  const [openForm,setOpenForm]=useState(false);
  const[edit,setEdit]=useState()
  const [initialForm,setForm]=useState({
    name:" ",class:" "
})
  useEffect(()=>{
    getUser();
    
  },[])
  let getUser=async()=>{
    let res=await getData();
    setUser(res.data);
  }
  let deleteUser=async(id)=>{
    await deleteData(id);
    getUser()
  }
  let addUser=async(student)=>{
    let data={
      name:student.name,
      class:student.class
    }
    if(edit)
      await putData(student.id,data)
    else
    await postData(data);
    getUser()
    setOpenForm(false);
  }
  let editUser=async(data)=>{
    setForm(data)
    setOpenForm(true)
    setEdit(true)
  }
  let showForm=()=>{
    setOpenForm(true)
    setForm({
      name:'',class:''
    })
  }
  let closeForm=()=>{
    setOpenForm(false)
  }

  return (
     
    <div className='wrapper m-5 w-50'>
      <input type='search' placeholder='search'/>
    <h1 className='text-primary'>School project</h1>
    <button className='btn btn-primary' onClick={()=>{showForm()}}>Add Student</button>
    <Table user={user} deleteUser={deleteUser} edit={editUser}></Table>
    {
      openForm && <Form closeForm={closeForm} data={initialForm} addStudent={addUser}/>
    }

    </div>
    
    
  );
}

export default App;
