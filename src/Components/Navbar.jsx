import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id='navbar'>
      <h2>
        <Link to="/"><BiCameraMovie /> LibMovies</Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )
}

export default Navbar;