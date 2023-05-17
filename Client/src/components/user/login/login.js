// import { FaSignInAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserLoginAction} from '../../../redux/action/UserLoginAction'

function Login() {
  const login = useSelector(state => state.UserLogin)
  const APIURL = useSelector(state => state.APIURL.url)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChange = (e) => {
    dispatch(UserLoginAction(e.target.name,e.target.value))
}

const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const headers={Authorization:`Bearer ${localStorage.getItem('token')}`}
        const response = await axios.post(`${APIURL}/login/`, login,{headers})
        if (response.data.userData && response.data.userData.email) {
          localStorage.setItem('token', response.data.token)
            navigate('/')
        } else {
          alert(response.data.message);
        }
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="sign">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              title="Please enter a valid username"
              name="email" 
              onChange={onChange}
              value={login.email}
              required />
            <label>Username</label>
          </div>

          <div className="txt_field">
            <input
              title="password should contain atleast 6 character"
              pattern="^.{6,}$"
              type="password"
              value={login.password}
              onChange={onChange}
              name="password"
              required />
            <label>Password</label>
          </div>

          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <Link to='/Signup'>Signup</Link>
          </div>
        </form>
      </div>

    </div>

  )
}

export default Login
