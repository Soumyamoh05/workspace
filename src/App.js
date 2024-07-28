// import logo from './logo.svg';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css';
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LoginPage />} />
          <Route path = "/signin" element = {<Signup />} />
          <Route path = "/contact" element = {<ContactUsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
