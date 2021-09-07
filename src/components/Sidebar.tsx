const Sidebar = ({links}:any) => { 
    return <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '280px', height: '100%', position: 'fixed'}}>
      <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">Todos</span>
    <hr />

    <ul className="nav nav-pills flex-column mb-auto">
    {links.map((link:any, index:number)=><li key={index} className="nav-item mt-2">{link}</li>)}
    </ul>
    <hr />
  </div>
}

export default Sidebar;