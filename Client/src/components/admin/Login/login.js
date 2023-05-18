import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './login.css'

function AdminLogin() {
  const API_URL = useSelector(state => state.APIURL.url);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` }
      const response = await axios.post(`${API_URL}/admin/login`, { email, password }, { headers });
      if (response.data && response.data.email) {
        localStorage.setItem('token', response.data.token);
        navigate('/admin/adminHome');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="center1 max-w-[500px] w-full">
          <h1 className='text-2xl text-center'>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field1">
            <input
              type="text"
              title="Please enter a valid email address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label>Email</label>
          </div>

          <div className="txt_field1">
            <input
              type="password"
              title="Password should contain at least 6 characters"
              pattern=".{6,}"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
            />
            <label>Password</label>
          </div>

          <button type="submit" className="w-full text-white bg-blue-900 hover:bg-blue-500 focus:outline-none  font-medium rounded-lg text-xl mb-5 py-2.5 text-center ">LOGIN</button>
        </form>
      </div>
    </>

  );
}

export default AdminLogin;
