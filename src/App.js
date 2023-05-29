import './App.css';
import Search from "./components/Search.jsx";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Search/>
      <Footer/>
    </div>
  );
}

export default App;
