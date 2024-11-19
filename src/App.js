import logo from './logo.svg';
import './App.css';
import Approuter from './config/router/approuter';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Approuter/>
      <Footer/>
    </div>

  );
}

export default App;
