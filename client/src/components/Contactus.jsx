
import React , { useState } from "react";
import axios from 'axios';

function Contactus() {

  const [state, setState] = useState({
   fname: '',
   lname: '',
   email: '',
   bname: '',
   servicetype:'',
   message: ''
 });

 const [result, setResult] = useState(null);

 function sendEmail(event) {
   event.preventDefault();
   axios
     .post('/send', { ...state })
     .then(response => {
       setResult({
         success: response.data.success,
         message: response.data.message
       });
       setState({
         fname: '',
         lname: '',
         email: '',
         servicetype:'',
         bname: '',
         message: ''
       });
     })
     .catch((err) => {
        setResult({
          success: false,
          message: 'Couldnt connect to the server.Please try again later'
        });
     console.log(err);
      });
 };

 function onInputChange(event){
   const { name, value } = event.target;

   setState({
     ...state,
     [name]: value
   });
 };

    return <div className="contactus" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
    <section id="contact">
<div className="container" id="hire">
<h1>Hire Us</h1>
<div className="wrapper">
<div className="form">
<div className="left-col">
<h2>Contact Us</h2>
<div className="info">
<img src="images/logo.png" class="cntimg" alt="" />
<p>Abt Dev Services</p>
<p>Abt.ahmadbintahir@gmail.com</p>
</div>
<div className="icons">
<p>Hire Us</p>
<p>Follow Us</p>
<div className="cnticons">
<a className="footer-link" href="https://www.facebook.com/profile.php?id=100068893172594"><i className="fab fa-facebook "></i></a>
<a className="footer-link " href="https://www.instagram.com/createriseabt/"><i className="fab fa-instagram "></i></a>
<a className="footer-link" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
</div>
</div>
</div>
<div className="right-col">
<h2>Oh yeah, you will definitely get us</h2>

<form className="formri8" onSubmit={sendEmail} method="post" >

<div className="row cntnamerow">
<div className="col-lg-6 cntnamecol">
<label for="fname" className="fname">First Name </label>
<div className="form-group">
<input id="fname" type="text" placeholder="ex:John" className="fname" name="fname" onChange={onInputChange} value={state.fname} />
</div>
</div>

<div className="col-lg-6 cntnamecol">
<label for="lname" className="lname">Last Name </label>
<div className="form-group">
<input id="lname" type="text" placeholder="ex:David" className="lname" name="lname" onChange={onInputChange} value={state.lname}
/>
</div>
</div>
</div>

<label for="Service-type" className="bname"  >Business Name </label>
<div className="form-group">
 <input id="Service-type" type="text" placeholder="ex:devservice" name="bname" onChange={onInputChange} value={state.bname} />
</div>

<label for="email" class="ename">Email Id</label>
<div className="form-group">
<input id="email" type="email" placeholder="ex:devservice@gmail.com" name="email" onChange={onInputChange} value={state.email} />
</div>

<p>Which development services do you want</p>
<div className="form-group" >
  <input type="radio" id="web" value="webapp" name="servicetype" onChange={onInputChange} />
  <label for="web"><i className="fas fa-laptop-code fa-2x devicon"></i></label>
  <input type="radio" id="mob" value="mobapp" name="servicetype" onChange={onInputChange} />
  <label for="mob"><i className="fas fa-mobile-alt fa-2x devicon"></i></label>
  <input type="radio" id="game" value="gameapp" name="servicetype" onChange={onInputChange} />
  <label for="game"><i className="fas fa-gamepad fa-2x devicon"></i></label>
</div>

   <label for="message" className="mname">Your Message</label>
   <div className="form-group">
   <textarea id="message" name="message" rows="4" cols="30" placeholder="Your Message Here" onChange={onInputChange} value={state.message}>
   </textarea>
   </div>
<button id="submit" type="submit" value="Submit" >Send</button>
{result && (
        <p className={`${result.success ? 'true' : 'false'}`}>
          {result.message}
        </p>
      )}
</form>
</div>
</div>
</div>
</div>
</section>

</div>
}

export default Contactus;
