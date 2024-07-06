import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const {nameID} = useParams()

    const {register, handleSubmit,  setValue} = useForm()

    const navigate = useNavigate()

    async function getData (){
        const result = await axios.get(`http://localhost:5020/name/${nameID}`)
        console.log(result)
        setValue('name', result.data.name)
        setValue('date', result.data.datef)
        setValue('gender', result.data.gender)
        setValue('class', result.data.class)
        setValue('code', result.data.coden)
    }

    const updateData = (data)=>{
        axios.put(`http://localhost:5020/name/${nameID}`, data)
        alert('Data updated')
        navigate('/show')

    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <section className="h-100 h-custom img1" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form className="px-md-2" onSubmit={handleSubmit(updateData)}>

              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" {...register('name')}/>
                <label className="form-label" htmlFor="form3Example1q">Name</label>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div data-mdb-input-init className="form-outline datepicker">
                    <input type="text" className="form-control" id="exampleDatepicker1" {...register('date')}/>
                    <label htmlFor="exampleDatepicker1" className="form-label">Select a date</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <select data-mdb-select-init {...register('gender')}>
                    <option value="Gender">Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>

                </div>
              </div>

              <div className="mb-4">

                <select data-mdb-select-init {...register('class')}>
                  <option value="class" >Class</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="Html">Html</option>
                </select>

              </div>

              <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                <div className="col-md-6">

                  <div data-mdb-input-init className="form-outline">
                    <input type="text" id="form3Example1w" className="form-control" {...register('code')}/>
                    <label className="form-label" htmlFor="form3Example1w">Registration code</label>
                  </div>

                </div>
              </div>

              <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-lg mb-1">Update</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Update