import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Show = () => {

    const [state, setState] = useState([])

    async function getData (){
        const result = await axios.get(`http://localhost:5020/name`)
        setState(result.data)
    }

    useEffect(()=>{
        getData()
    })
  return (
    <div>
      <h2>show data</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((element, index)=>{
              return(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.name}</td>
                  <td>{element.datef}</td>
                  <td>{element.gender}</td>
                  <td>{element.class}</td>
                  <td>{element.coden}</td>
                  <td>
                    <NavLink to={`/update/name/${element.id}`}><button className='btn btn-warning'>UPDATE</button></NavLink>
                    <NavLink to={`/delete/name/${element.id}`}><button className='btn btn-danger'>DELETE</button></NavLink>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Show