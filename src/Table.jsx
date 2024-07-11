import React from 'react'
//import axios from 'axios'


const Table = (props) => {
  return (
    <table className='table m-3'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>class</th>
            </tr>
        </thead>
        <tbody>
            {
                props.user.map((data)=>
                    (
                    <tr key={data.id}>
                         <td>{data.id}</td>
                       
                        <td>{data.name}</td>
                        <td>{data.class} </td>
                        <td>
                            <button className='btn btn-primary m-1' onClick={()=>{props.edit(data)}}>Edit</button>
                        </td>
                        <td>
                            <button className='btn btn-danger m-1' onClick={()=>{
                                props.deleteUser(data.id)
                            }}>Delete</button>
                        </td>
                    </tr>
                    )

                )

            }
        </tbody>
    </table>
  )
}

export default Table
