import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarComponent from './components/Navbar'
import SignUp1 from "./components/SignUp1"
import Profile from "./components/Profile"

const App = () => {
  return (
	<>
    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
	<BrowserRouter>
      <div className="App">
		<NavbarComponent />
			<Switch>
				<Route exact path='/'>
					<SignUp1/>
				</Route>						
				<Route path='/signup'>
					<SignUp1/>
				</Route>
				<Route path='/profile'>
					<Profile />
				</Route>
			</Switch>
      </div>
	</BrowserRouter>
	</>
    
  );
}
export default App;
