import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
    <section className="heading">
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Login to your account</p>
    </section>
    <section className="form">
      <form >
        <div className="form-group">
            <input type="email" 
            className="form-control"
             id='email' 
             value={email} 
             name="email"
            onChange={onChange}
            placeholder="Enter your email"
            />
            <input type="password" 
            className="form-control"
             id='password' 
             value={password} 
             name="password"
            onChange={onChange}
            placeholder="Enter your password"
            />
        </div>
        <div className="form-group">
          <button className="btn btn-block">
            Login
          </button>
        </div>
      </form>
    </section>
    </>
  )
}

export default Login