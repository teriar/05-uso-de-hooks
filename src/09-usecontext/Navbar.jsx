import { Link, NavLink } from "react-router-dom"




export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Usecontext</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
           className={({isSctive})=> `nav-link ${isSctive ? 'active':''}`}
          to="/">
            Home
          </NavLink>
          <NavLink
           className={({isSctive})=> `nav-link ${isSctive ? 'active':''}`}
          to="/bout">
            about
          </NavLink>
          <NavLink
           className={({isSctive})=> `nav-link ${isSctive ? 'active':''}`}
          to="/login">
            Login
          </NavLink>
        </ul>
      </div>
    </div>
  </nav>
    
    
  )
}
