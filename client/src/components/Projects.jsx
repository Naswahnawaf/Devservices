

function Portfoliocard(props){

  return <figure className="col-lg-4 cards">
  <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active">
  <img src={props.src1} className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src={props.src2} className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src={props.src3} className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src={props.src4} className="d-block w-100" alt="..." />
</div>
<div className="carousel-item">
  <img src={props.src5} className="d-block w-100" alt="..." />
</div>
</div>
</div>
<figcaption>
   <span>Project</span>
   <span>{props.ftitle}</span>
   <span>{props.stitle}</span>
 </figcaption>

</figure>
}



function Projects() {
  return <div className="projects" id="projects" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">

    <h1 data-aos="slide-right" data-aos-delay="500" data-aos-duration="1000">Projects</h1>
    <div className="row portfoliorow">
    <Portfoliocard ftitle="Hacking"  src1="images/projhac/hac1.png" src2="images/projhac/hac2.png" src3="images/projhac/hac3.png" src4="images/projhac/hac4.png" src5="images/projhac/hac5.png"  />
    <Portfoliocard ftitle="Photo" stitle="Editor" src1="images/projpic/pic1.png" src2="images/projpic/pic2.png" src3="images/projpic/pic3.png" src4="images/projpic/pic4.png" src5="images/projpic/pic5.png"  />
    <Portfoliocard ftitle="ABT" src1="images/projabt/abt1.png" src2="images/projabt/abt2.png" src3="images/projabt/abt3.png" src4="images/projabt/abt4.png" src5="images/projabt/abt5.png"  />
    <Portfoliocard ftitle="Security" src1="images/projsec/sec1.png" src2="images/projsec/sec2.png" src3="images/projsec/sec3.png" src4="images/projsec/sec4.png" src5="images/projsec/sec5.png"  />
    <Portfoliocard ftitle="Login" stitle="Design" src1="images/projlogin/log1.png" src2="images/projlogin/log2.png" src3="images/projlogin/log3.png" src4="images/projlogin/log1.png" src5="images/projlogin/log2.png"  />
    <Portfoliocard ftitle="Facebook" src1="images/projfb/fb1.png" src2="images/projfb/fb2.png" src3="images/projfb/fb3.png" src4="images/projfb/fb4.png" src5="images/projfb/fb5.png"  />

</div>
  </div>
}

export default Projects;
