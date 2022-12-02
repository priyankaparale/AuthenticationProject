import React from 'react'

const Profile = () => {

  const Logout = (e) => {
    e.preventDefault();
    
  }

  return (
    // <div className="container login-container">
    // <div className="login-form-1">
    //   <h1>Profile</h1>
    //   <h4>FullName : </h4>
    //   <h4>Email : </h4>
    //   <h4>Password : </h4>
    //   <button className='btn' type='submit'>Logout</button>
    // </div>
    // </div>
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