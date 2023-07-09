import React, {useState, useEffect} from 'react'
import './contact.css'

function Contact() {
  const allValues = {
    username: '',
    email: '',
    phone: '',
    message: ''
  }
  const[inputValues, setInputValues] = useState(allValues)
  const[formErrors, setFormErrors] = useState({})
  const[isSubmit, setIsSubmit] = useState(false)

const handleChange = (e)=>{
  const{name, value} = e.target
  setInputValues(()=>{
    return{
      ...inputValues,
      [name]: value
    }
  })
}
const handleSubmit = (e)=>{
  e.preventDefault()
  setFormErrors(validate(inputValues))
  setIsSubmit(true)
}

useEffect(()=>{
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(inputValues);
  }
}, [formErrors])


const validate = (values)=>{
  const errors = {}
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
  if(!values.username){
    errors.username = 'Username is required'
  }
  if(!values.email){
    errors.email = 'Email is required'
  }else if(!regex.test(values.email)){
    errors.email = 'Enter a valid email'
  }
  if(!values.phone){
    errors.phone = 'Enter your phone number'
  }
  if(!values.message){
    errors.message = 'Send a message'
  }
  return errors
}
  return (
    <>
    <div className='header-title'><h1><span id='header-my'>My</span> Contact</h1></div>
    <div className="all-items-container">
      <div className='input-section'>
        <form onSubmit={handleSubmit}>
          {Object.keys(formErrors).length === 0 && isSubmit ? <div className='submit'>Submitted successfully</div>: ''}
          <input type="text" name='username' placeholder='Enter your name' onChange={handleChange}/>
          <p>{formErrors.username}</p>
          <input type="email" name='email' placeholder='Enter your email' onChange={handleChange}/>
          <p>{formErrors.email}</p>
          <input type="text" name='phone' placeholder='Enter phone number' onChange={handleChange}/>
          <p>{formErrors.phone}</p>
          <textarea name="message" id="" cols="20" rows="1" placeholder='message' onChange={handleChange}></textarea>
          <p>{formErrors.message}</p>
          <button onClick={handleSubmit}>Submit</button>
        </form> 
      </div>
      <div className="address-container">
        <p>Address/Street: Nairobi</p>
        <p>Email: kimdev79@gmail.com</p>
        <p>Phone: 0797035367</p>
        <p>GitHub: <a href="https://t.co/PLcCPwLwg4">github.com</a></p>
        <p>Twitter: <a href="https://twitter.com/KelvinHawks35">twitter.com</a></p>

      </div>
    </div>
    </>
  )
}


export default Contact