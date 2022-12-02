import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import { toast } from 'react-toastify'
import './SignUp1.css'

const SignUp1 = () => {

    // const [signup, setsignUp] = useState({
    //     fullname: "",
    //     email: "",
    //     password: "",
    //     confirmpassword: ""
    // });

    // let name, value;
    // const handleInput = (e) => {
    //     name = e.target.name;
    //     value = e.target.value;
    //     console.log(name, value);

    //     setsignUp({ ...signup, [name]: value });
    // }

    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    //getting userdetails
    const username = localStorage.getItem('fullname')?
    localStorage.getItem('fullname') : 'adminname'

    const useremail = localStorage.getItem('email')?
    localStorage.getItem('email') : 'admin@123'

    const userpassword = localStorage.getItem('password')?
    localStorage.getItem('password') : '123'

    const navigate = useNavigate()

    // const [userDetails, setUserDetails] = useState({
	// 	fullName: '',		
	// 	email: '',
	// 	password: '',	
    // confirmPassword: '',	
	// })


    // const [error, setError] = useState({
	// 	fullName: false,
	// 	email: false,		
	// 	password: false,
    //     confirmPassword: false,
	// })
	// const [submit, setSubmit] = useState(false)
	// const [success, setSuccess] = useState(false)

	// useEffect(() => {
	// 	if(submit && !Object.values(error).includes(true)){
	// 		setSuccess(true)
	// 		setUserDetails({
	// 			fullName: '',		
    //             email: '',
    //             password: '',
    //             confirmPassword: '',
	// 		})
	// 	}
	// }, [submit, error])


    // const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setSubmit(true)
    // }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(fullname === username && email===useremail && password === userpassword){
            toast.success('Sign up successsfull.')
            navigate('/profile')
        }else{
            toast.error("Invalid details.")
        }

        // if(fullname === ""){
        //     toast.error("Name is required")
        // }else if(email === " "){
        //     toast.error("email is required")
        // }else if(password === " "){
        //     toast.error("password is required")
        // }else if(confirmpassword === " "){
        //     toast.error("confirm password is required")
        // }else{
        //     localStorage.setItem('fullname', fullname)
        //     localStorage.setItem('email', email)
        //     localStorage.setItem('password', password)
        //     localStorage.setItem('confirmpassword', confirmpassword)
        //     toast.success("UserDetails saved!")
        // }

    }

  return (
    <>
    <div className="container login-container">
    <div className="login-form-1">
    <h1>Signup</h1>
        {/* <form action="" onSubmit={handleSubmit}> */}
        <form action="">
            <div>
                <label htmlFor='FullName'>FullName</label><br></br>
                <input className="form-control" type='text' placeholder='Fullname' autoComplete='off' 
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
                name="FullName" id='FullName'/>
            </div>
            <div>
                <label htmlFor='Email'>Email</label><br></br>
                <input className="form-control"  type='text' placeholder='Email'  autoComplete='off'
                value={email}
                onChange={(e) => setemail(e.target.value)}
                name="Email" id='Email'/>
            </div>
            <div>
                <label htmlFor='Password'>Password</label><br></br>
                <input className="form-control"  type='password' placeholder='Password'  autoComplete='off' 
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                name="Password" id='Password'/>
            </div>
            <div>
                <label htmlFor='ConfirmPassword'>Confirm Password</label><br></br>
                <input className="form-control"  type='password' placeholder='Confirm Password'  autoComplete='off' 
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
                name="ConfirmPassword" id='ConfirmPassword'/>
            </div>
            {/* <div>
            {submit && !success && (error.confirmPassword ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid password.
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            ))}
            </div> */}
            <button className='btn' type='submit' onClick={handleSubmit}> Submit</button>
        </form>
    </div>
    </div>
    </>
  )
}

export default SignUp1