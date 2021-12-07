import { BrowserRouter as Router, Routes, Route, NavLink as Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'


export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li>
          <Link to="works" activeClassName="active">Works</Link>
          </li>
          <li>
          <Link to="about" activeClassName="active">About</Link>
          </li>
          <li>
          <Link to="contact" activeClassName="active">Contact Me!</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="works" element={<Works/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>

    </div>
  )
}
