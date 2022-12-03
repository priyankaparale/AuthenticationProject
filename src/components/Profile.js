import React from 'react'
import { useNavigate } from 'react-router-dom' 

const Profile = () => {

  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()

    if(localStorage.getItem("token") === " " ){
      navigate('/')
    }
  }

  return (
    <>
    <div className="container login-container">
      <div className="login-form-1">
      <h1>Profile</h1><br></br>
              <div>
                  <h4>
                    FullName :{" "}
                    {localStorage.getItem("fullName") ? localStorage.getItem("fullName") : "NA"
                    }
                  </h4>
              </div>
              <div>
              <h4>
                    Email :{" "}
                    {localStorage.getItem("email") ? localStorage.getItem("email") : "NA"
                    }
                  </h4>
              </div>
              <div>
              <h4>
                    Password :{" "}
                    {localStorage.getItem("password") ? localStorage.getItem("password") : "NA"
                    }
                  </h4>
              </div>
              <button className='btn' type='submit' onSubmit={handleLogout}> Logout</button>
      </div>
    </div>
    </>
  )
}

export default Profile