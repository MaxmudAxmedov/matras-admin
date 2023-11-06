import { useState } from 'react';

const BASE_URL = 'http://localhost:1212/admin';

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            userName: userName,
            password: password
        }

        fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token)
            console.log(data);
        })
    }   
  return (
    <div style={{width: '550px', margin: '0 auto'}} className='mt-5 p-5 border rounded'>
        <h2 className='text-center mb-5'>Kirish</h2>
        <form onSubmit={handleSubmit} className="d-flex w-100 m-auto flex-column">
            <label>
                <input className='form-control w-100 mb-3' type="text" placeholder='Login' onChange={(e) => setUserName(e.target.value)}/>
            </label>
            <label>
                <input className='form-control w-100 mb-3' type="password" placeholder='Parol' onChange={(e) => setpassword(e.target.value)}/>
            </label>
            <button type="submit" className='btn btn-primary'>Kirish</button>
        </form>
    </div>

  )
}

