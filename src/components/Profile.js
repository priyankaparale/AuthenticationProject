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
              <button className='btn' type='submit'> Logout</button>
      </div>
    </div>
    </>
  )
}

export default Profile