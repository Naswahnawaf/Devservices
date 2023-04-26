
function Navbar() {

  function clicked(){
     document.body.classList.toggle("dark-theme");
}

  return<section id="nav-bar">
     <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
           <a className="navbar-brand" href="#home"><img src="images/logo.png" alt="" /></a>
           <label className="switch">
                <input onClick={clicked} type="checkbox" />
                <span className="slider round"> </span>
            </label>
                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                       </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav ">
               <li className="nav-item">
                 <a className="nav-link" aria-current="page" href="/#home">HOME</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/#about">ABOUT US</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/#service">SERVICES</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/#skills">SKILLS</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/#projects">PROJECTS</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/#contact">CONTACT</a>
               </li>
               <li className="nav-item">

              </li>
               </ul>
           </div>

         </div>
       </nav>

 </section>
}

export default Navbar;
