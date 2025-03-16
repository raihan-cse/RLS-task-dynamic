import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './assets/sass/style.scss';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ContactUs from './components/pages/ContactUs';
import Faqs from './components/pages/FAQs';
import Home from './components/pages/Home';
import SignUp from "./components/pages/SignUp";
import LogIn from './components/pages/LogIn';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home /> } />
        <Route path="/contact-us" element={<ContactUs /> } />
        <Route path="/faqs" element={<Faqs /> } />
        <Route path="/sign-up" element={<SignUp /> } />
        <Route path="/log-in" element={<LogIn /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
