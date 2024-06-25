// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React From the Bestttt
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./pages/contact/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/test" element={<Test />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
