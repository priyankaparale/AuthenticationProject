import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import NavbarComponent from './components/Navbar'
import SignUp1 from "./components/SignUp1"
import Profile from "./components/Profile"

const App = () => {
  return (
	<>
    {/* <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
	<BrowserRouter basename="/AuthenticationProject">
      <div className="App">
		<NavbarComponent />
			<Routes>
				<Route exact path='/AuthenticationProject' element={<SignUp1/>}/>	
			</Routes>
			<Routes>					
				<Route path='/header' element={<SignUp1/>}/>
			</Routes>
			<Routes>					
				<Route path='/signup' element={<SignUp1/>}/>
			</Routes>
			<Routes>
				<Route path='/profile' element={<Profile />}/>				
			</Routes>
      </div>
	</BrowserRouter>
	</>
    
  );
}
export default App;
