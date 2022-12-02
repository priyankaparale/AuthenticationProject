import React from 'react'

const Profile = () => {

  return (
    <>
    <div className="container login-container">
      <div className="login-form-1">
      <h1>Profile</h1><br></br>
              <div>
                  <h4>
                    FullName :{" "}
                    {localStorage.getItem("fullname") ? localStorage.getItem("fullname") : "NA"
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
                    {localStorage.getItem("password") ? localStorage.getItem("passord") : "NA"
                    }
                  </h4>
              </div>
              <button className='btn' type='submit' onClick='{Logout}'> Logout</button>
      </div>
    </div>
    </>
  )
}

export default Profile