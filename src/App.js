import logo from './logo.svg';
import './App.css';
import {Link, NavLink, Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <main className='homepage'>
      <header>
        <div className='logo'>
          <Link to = "/"><i class="fa-solid fa-globe"></i></Link>
        </div>
        <ul>
          <li><NavLink to = '/'> Home</NavLink> </li>
          <li> <NavLink to = 'about'>About</NavLink></li>
          <li><NavLink to = 'article'>Articles</NavLink> </li>
        </ul>
       
      </header>

      <section>
        <div>
          <Outlet/>
        </div>
      </section>
      </main>
      
    </div>
  );
}

export default App;
