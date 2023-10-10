// function based component below
import React from 'react'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">News Bank</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item"><a href="/about" className="nav-link">About</a></li> */}
              <li className="nav-item"><a href="/Sports" className="nav-link">Sports</a></li>
              {/* <li className="nav-item"><a href="/Politics" className="nav-link">Politics</a></li> */}
              <li className="nav-item"><a href="/Business" className="nav-link">Business</a></li>
              <li className="nav-item"><a href="/Entertainment" className="nav-link">Entertainment</a></li>
              {/* <li className="nav-item"><a href="/USA" className="nav-link">USA</a></li> */}
              <li className="nav-item"><a href="/Health" className="nav-link">Health</a></li>
              <li className="nav-item"><a href="/Science" className="nav-link">Science</a></li>
              {/* <li className="nav-item">
          <a className="nav-link" to="/about">About-App</a>
        </li> */}
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
              {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


//class based component below

// import React, { Component } from 'react'
// // import { Link } from 'react-router-dom/cjs/react-router-dom.min'

// export class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">News Bank</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link" aria-current="page" href="/">Home</a>
//                 </li>
//                 {/* <li className="nav-item"><a href="/about" className="nav-link">About</a></li> */}
//                 <li className="nav-item"><a href="/Sports" className="nav-link">Sports</a></li>
//                 <li className="nav-item"><a href="/Politics" className="nav-link">Politics</a></li>
//                 <li className="nav-item"><a href="/Business" className="nav-link">Business</a></li>
//                 <li className="nav-item"><a href="/Entertainment" className="nav-link">Entertainment</a></li>
//                 <li className="nav-item"><a href="/USA" className="nav-link">USA</a></li>
//                 <li className="nav-item"><a href="/Health" className="nav-link">Health</a></li>
//                 <li className="nav-item"><a href="/Science" className="nav-link">Science</a></li>
//                 {/* <li className="nav-item">
//           <a className="nav-link" to="/about">About-App</a>
//         </li> */}
//                 {/* <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="/">Action</a></li>
//             <li><a className="dropdown-item" href="/">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="/">Something else here</a></li>
//           </ul>
//         </li> */}
//                 {/* <li className="nav-item">
//           <a className="nav-link disabled">Disabled</a>
//         </li> */}
//               </ul>
//               {/* <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form> */}
//             </div>
//           </div>
//         </nav>
//       </div>
//     )
//   }
// }

// export default Navbar
