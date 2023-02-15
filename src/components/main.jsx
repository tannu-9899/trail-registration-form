import React from 'react';

import './main.css'

let Form = ()=>{
    

    
    return(
        <>
        {/*left-side pannel*/}
        <div class="row">
  <div class="col-sm-6">
    <div className='aside'>
      <h1>Learn to code by watching others</h1>
      <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
    </div>
  </div>

  {/*Right-side pannel*/}

  <div class="col-sm-6">
    <div className='try-form'>
        <div className='top-label'>
            <button className='top-btn'>Try it free 7 days then ₹180/mo. thereafter</button>
        </div><br/>

        {/*main-form trial-registration-form*/}

        <div className='main-form'>
        <form action='main.jsx'>
        <div class="form-group">
        <input type={"text"} class="form-control"  aria-describedby="emailHelp" placeholder="Full Name" required />
       </div>
        <div class="form-group">
        <input type={"email"} class="form-control"  aria-describedby="emailHelp" placeholder="Email"  required/>
       </div>
       <div class="form-group">
       <input type={"password"} class="form-control"  placeholder="Password" required/>
       </div>
       <select class="custom-select my-1 mr-sm-2" >
       <option selected>Choose Your Skills</option>
       <option value="1">Html</option>
       <option value="2">Css</option>
       <option value="3">JavaScript</option>
       </select>

       
       <button className='btn'>Claim your Free Trial</button>
       </form>
       <h6>By clicking the button you are agreeing to our <bold>Terms and Services</bold></h6>
       </div>
    </div>
  </div>
  
</div>

    </>


    )
    
}


export default Form