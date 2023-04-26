import VanillaTilt from "./tilt.js";

function Pricingplan() {
      function hovered(){
          VanillaTilt.init(document.querySelectorAll(".tilt"), {
              max: 25,
              speed: 400,
              glare: true,
              "max-glare": 1
          });
        }

  return <section id="price" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" >
            <div className="container">
                <h1 data-aos="slide-right" data-aos-delay="500" data-aos-duration="1000">Price Plan</h1>
                <div className="row">
                <div className="col-xl-3 col-md-6 tilt" onMouseOver={hovered} data-aos="zoom-in" data-aos-delay="600" data-aos-duration="2000" >
                                     <div className="single-price">
                                         <div className="price-head">
                                         <h2>Web Development</h2>
                                         <p>100$</p>
                                     </div>
                                     <div className="price-content">
                                         <ul>
                                             <li>Great Desgin</li>
                                             <li>Just how you want it</li>
                                             <li>Business Website</li>
                                         </ul>

                                     </div>
                                     <div className="price-button">
                                         <a className="buy-btn" href="#home">Buy this service</a>
                                     </div>

                                     </div>
                                 </div>
                <div className="col-xl-3 col-md-6 tilt" onMouseOver={hovered} data-aos="zoom-out" data-aos-delay="800" data-aos-duration="2000">
                                     <div className="single-price">
                                         <div className="price-head">
                                         <h2>Digital Marketing</h2>
                                         <p>100$</p>
                                     </div>
                                     <div className="price-content">
                                         <ul>
                                             <li>Great Desgin</li>
                                             <li>Just how you want it</li>
                                             <li>Business Website</li>
                                         </ul>

                                     </div>
                                     <div className="price-button">
                                         <a className="buy-btn" href="#home">Buy this service</a>
                                     </div>

                                     </div>
                                 </div>
                 <div className="col-xl-3 col-md-6 tilt" onMouseOver={hovered} data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="2000">
                                     <div className="single-price">
                                         <div className="price-head">
                                         <h2>App Developement</h2>
                                         <p>100$</p>
                                     </div>
                                     <div className="price-content">
                                         <ul>
                                             <li>Great Desgin</li>
                                             <li>Just how you want it</li>
                                             <li>Business Website</li>
                                         </ul>

                                     </div>
                                     <div className="price-button">
                                         <a className="buy-btn" href="#home">Buy this service</a>
                                     </div>

                                     </div>
                                 </div>
                 <div className="col-xl-3 col-md-6 tilt" onMouseOver={hovered} data-aos="zoom-out" data-aos-delay="1500" data-aos-duration="2000">
                                     <div className="single-price">
                                         <div className="price-head">
                                         <h2> Content Writing</h2>
                                         <p>100$</p>
                                     </div>
                                     <div className="price-content">
                                         <ul>
                                             <li>Great Desgin</li>
                                             <li>Just how you want it</li>
                                             <li>Business Website</li>
                                         </ul>

                                     </div>
                                     <div className="price-button">
                                         <a className="buy-btn" href="#home">Buy this service</a>
                                     </div>

                                     </div>
                                 </div>

                </div>

            </div>

        </section>
}

export default Pricingplan;
