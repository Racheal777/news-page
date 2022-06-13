
import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <div className="logo">
          <Link to="/">
            <i class="fa-solid fa-globe"></i>
          </Link>
        </div>
        <ul>
          <li>
            <NavLink to="/"> Home</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="article">Articles</NavLink>{" "}
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>{" "}
          </li>
        </ul>
        <div>
          <footer>
            <p>Copyright ©2022 All rights reserved </p>
            <p> This template is made with ❤️❤️ by Rich Designs</p>
          </footer>
        </div>
      </header>

      <main className="homepage">
        <section>
          <div>
            <Outlet />
          </div>
        </section>

        <section className="forms">
          <div>
            <form className="formzz">
              <input type="text" id="search" placeholder="Search here ..." />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
