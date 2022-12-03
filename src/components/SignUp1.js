import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
// import { toast } from 'react-toastify'
import './SignUp1.css'

const SignUp1 = () => {

    // const [fullname, setfullname] = useState('')
    // const [email, setemail] = useState('')
    // const [password, setpassword] = useState('')
    // const [confirmpassword, setconfirmpassword] = useState('')

    // const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if(fullname === ""){
    //         toast.error("Name is required")
    //     }else if(email === " "){
    //         toast.error("email is required")
    //     }else if(password === " "){
    //         toast.error("password is required")
    //     }else if(confirmpassword === " "){
    //         toast.error("confirm password is required")
    //     }else{
    //         localStorage.setItem("token", "qwefhtnhjtdwert")
    //         localStorage.setItem('fullname', fullname)
    //         localStorage.setItem('email', email)
    //         localStorage.setItem('password', password)
    //         localStorage.setItem('confirmpassword', confirmpassword)
    //         toast.success("UserDetails saved!")
    //         navigate('/profile')
    //     }

    // }

    const [userDetails, setUserDetails] = useState({
      fullName: '',		
      email: '',
      password: '',	
          confirmPassword: '',	
    })
    const [error, setError] = useState({
      fullName: false,
      email: false,		
      password: false,
          confirmPassword: false,
    })
    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
      if(submit && !Object.values(error).includes(true)){
        setSuccess(true)
        setUserDetails({
          fullName: '',		
          email: '',
          password: '',
          confirmPassword: '',
        })
      }
    }, [submit, error])

    const navigate = useNavigate()
	
    const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true)

		const { fullName, email, password, confirmPassword } = userDetails


    if(userDetails !== " "){
      localStorage.setItem("token", "qwefhtnhjtdwert")
      navigate('/profile')
    }

		if(fullName.length <= 4) {
			setError((previousError) => ({
				...previousError,
				fullName: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				fullName: true,
			}))
            localStorage.setItem('fullName', fullName)
		}
	
		if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") !== 0 &&
			email.length - email.lastIndexOf(".") >= 3
		) {
			setError((previousError) => ({
				...previousError,
				email: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				email: true
			}))
            localStorage.setItem('email', email)
		}	
	
		// password = parseInt(password)
		if(password.length === 6 && !isNaN(password)) {
			setError((previousError) => ({
				...previousError,
				password: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				password: true
			}))
            localStorage.setItem('password', password)
		}

        if(confirmPassword.length === password && !isNaN(confirmPassword)) {
			setError((previousError) => ({
				...previousError,
				confirmPassword: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				confirmPassword: true
			}))
            localStorage.setItem('confirmPassword', confirmPassword)
		}
    }
  return (
    <>
    <div className="container login-container">
    <div className="login-form-1">
    <h1>Signup</h1><br></br>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor='FullName'>FullName</label><br></br>
                <input className="form-control" type='text' placeholder='Fullname' autoComplete='off' 
                value={userDetails.fullName}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    fullName: e.target.value,
                  })
                }
                name="FullName" id='FullName'/>
                {submit && !success && (error.fullName ? (
              <div type="invalid">
                Please enter a fullname
              </div>
            ) : (
              <div>Looks good!</div>
            ))}
            </div>
            <div>
                <label htmlFor='Email'>Email</label><br></br>
                <input className="form-control"  type='text' placeholder='Email'  autoComplete='off'
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
                name="Email" id='Email'/>
                {submit && !success && (error.email ? (
              <div type="invalid">
                Please enter a valid email
              </div>
            ) : (
              <div>Looks good!</div>
            ))}
            </div>
            <div>
                <label htmlFor='Password'>Password</label><br></br>
                <input className="form-control"  type='password' placeholder='Password'  autoComplete='off' 
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  })
                }
                name="Password" id='Password'/>
                {submit && !success && (error.password ? (
              <div type="invalid">
                Please enter a valid password
              </div>
            ) : (
              <div>Looks good!</div>
            ))}
            </div>
            <div>
                <label htmlFor='ConfirmPassword'>Confirm Password</label><br></br>
                <input className="form-control"  type='password' placeholder='Confirm Password'  autoComplete='off' 
                value={userDetails.confirmPassword}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
                name="ConfirmPassword" id='ConfirmPassword'/>
                {submit && !success && (error.confirmPassword ? (
              <div type="invalid">
                Please confirm Your passord.
              </div>
            ) : (
              <div>Looks good!</div>
            ))}
            </div>
            <button className='btn' type='submit'> Submit</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default SignUp1