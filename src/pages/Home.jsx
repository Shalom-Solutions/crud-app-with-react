import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    const users = useSelector((state) => state.users)
    console.log(users)
    const dispatch = useDispatch()

  return (
    <div className='container mt-5'>
        <h2 className='text-secondary text-center my-5'>Crud app using redux toolkit</h2>
        <Link to='/create' className='btn btn-success my-3'> Create +</Link>
        <table className='table table-striped'>
            <thead>
                <tr>
                   <th>Id</th> 
                   <th>Name</th> 
                   <th>Email</th> 
                   <th>Action</th> 
                </tr>
                
            </thead>
            <tbody>
               {
                users.map((user) => (
                    <tr key={user.id}>
                    <td>{user.id}</td> 
                    <td>{user.name}</td> 
                    <td>{user.email}</td> 
                    <td>
                     <button className='btn btn-primary '>Edit</button>
                     <button className='btn btn-danger mx-3'>Delete</button>
                     </td> 
                 </tr>
                ) )
               }
            </tbody>
        </table>
    </div>
  )
}

export default Home