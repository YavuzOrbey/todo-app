const Navbar = ({links}:any) => 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <span className="navbar-brand">Todo App</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     {links.map((link:any)=><li className="nav-item">{link}</li>)}
      </ul>
    <span className="navbar-text">
        Create a list of errands!
    </span>
    </div>
    </div>
</nav>
export default Navbar;