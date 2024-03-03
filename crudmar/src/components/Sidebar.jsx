import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Crudstore } from '../store/Crudstore'

const Sidebar = () => {

  const {show, whatTodisplay} = useContext(Crudstore);
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px", height: "auto"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to={"/"} className={`nav-link text-white ${whatTodisplay === "createpost" && 'active'}`} aria-current="page" onClick={() => show("createpost")}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </Link>
      </li>
      <li>
        <Link to={"/post-list"} className={`nav-link text-white ${whatTodisplay === "postlist" && 'active'}`} onClick={() => show("postlist")}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Dashboard
        </Link>
      </li>

    </ul>
    <hr />
    
  </div>
  )
}

export default Sidebar