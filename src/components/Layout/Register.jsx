import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Register = () => {

    const {register, handleSubmit, reset} = useForm()


    const navigate = useNavigate()




    const saveData = (data)=>{
        axios.post('http://localhost:5020/name', data)
        alert('save')
        navigate('/show')
        reset()
        


    }


  return (
    <div>
        <section className="h-100 h-custom img1" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-8 col-xl-6">
        <div className="card rounded-3">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

            <form className="px-md-2" onSubmit={handleSubmit(saveData)}>

              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form3Example1q" className="form-control" {...register('name')}/>
                <label className="form-label" htmlFor="form3Example1q">Name</label>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div data-mdb-input-init className="form-outline datepicker">
                    <input type="text" className="form-control" id="exampleDatepicker1" {...register('datef')}/>
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
                    <input type="text" id="form3Example1w" className="form-control" {...register('coden')}/>
                    <label className="form-label" htmlFor="form3Example1w">Registration code</label>
                  </div>

                </div>
              </div>

              <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-lg mb-1">Submit</button>

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

export default Register