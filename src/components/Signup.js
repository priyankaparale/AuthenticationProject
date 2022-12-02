import { useState, useEffect } from 'react'
import { Button, Row, Col, Form, InputGroup, Alert, Container, } from "react-bootstrap"
import './Signup.css'

const Signup = () => {
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
	
  const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true)

		const { fullName, email, password, confirmPassword } = userDetails

		if(fullName.length <= 2) {
			setError((previousError) => ({
				...previousError,
				firstName: false
			}))
		} else {
			setError((previousError) => ({
				...previousError,
				firstName: true
			}))
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
		}	
	
		// let password = parseInt(password)
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
		}

  };

  return (
    <div style={{
        background: "black",
        textAlign: "left",
        // justifyContent: "center",
        padding: "10px 10px 70px 10px",
    }}>
      <Container style={{
          marginLeft: "18rem",
        }}>
        <h1 className="display-6 mt-4 mb-4"
            style={{
                
                color: "white"
            }}>Sign Up
        </h1>
      {success && (
        <Alert variant="success">Your details were saved successfully!</Alert>
      )}
      <Form onSubmit={handleSubmit} className="registration-form">
        <Row className="mb-3" style={{
            color: "white"
        }}>
          <Form.Group as={Col} md="6" controlId="validationCustom01"
          style={{
            backgroundColor: "none",
          
        }}
          >
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="full name"
              value={userDetails.fullName}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  fullName: e.target.value,
                })
              }
            />
            {submit && !success && (error.firstName ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid first name
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            ))}
          </Form.Group>
        </Row>
        <Row className="mb-3" style={{            
            color: "white"
        }}>
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="email"
                aria-describedby="inputGroupPrepend"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
              />
              {submit && !success && (error.email ? (
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              ))}
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3" style={{
            
            color: "white"
        }}>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="password"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  password: e.target.value,
                })
              }
            />
            {submit && !success && (error.password ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid password.
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            ))}
          </Form.Group>
        </Row>
        <Row className="mb-3" style={{
            
            color: "white"
        }}>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="text"
              placeholder="confirm password"
              value={userDetails.confirmPassword}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  confirmPassword: e.target.value,
                })
              }
            />
            {submit && !success && (error.confirmPassword ? (
              <Form.Control.Feedback type="invalid">
                Please enter a valid password.
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            ))}
          </Form.Group>
        </Row>
        <Button variant="light" type="submit" style={{
            marginRight:"30rem"
        }}>Submit form</Button>
      </Form>
      </Container>
    </div>
  );
};

export default Signup;
