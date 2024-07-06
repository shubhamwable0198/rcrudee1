import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Delete = () => {

    const [show, setShow] = useState({})

    const {nameID} = useParams()

    async function getData (){
        const result = await axios.get(`http://localhost:5020/name/${nameID}`)
        console.log(result)
        setShow(result.data)

    }


    const deleteData = ()=>{
        axios.delete(`http://localhost:5020/name/${nameID}`)
        alert('data delete')
    }


    useEffect(()=>{
        getData()
    })

  return (
    <div>
        <h2>Delete Data</h2>
        <h3>{show.name}</h3>

       <NavLink to={`/show`}><button onClick={deleteData} className='btn btn-danger'>YES</button></NavLink>
       <NavLink to={'/show'}><button className='btn btn-success'>NO</button></NavLink>
    </div>
  )
}

export default Delete