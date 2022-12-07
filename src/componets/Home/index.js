import React from "react";
import Skills from '../Skills';
import featuredImage from '../../assets/images/featued_image.png';
export default function Home() {
  return (
    <div className="mt-4 pt-4" >
       <div className="d-flex ">
       <div className="col-4   pt-4" style={{  justifyContent:'center'}}>
          <h1 className={{alignSlef:'end'}}> Hii !  </h1>
          <h1 className={{alignSlef:'start'}}> I'm Dhiraj Hire me!</h1>

          <button type="button" className="btn btn-info">Hire Me</button>

          <i className="bi bi-facebook"></i>
          
         {/* <h5>dnayak696@gmail.com</h5>

         <h5>8249428963</h5>
         <Skills/> */}
       </div> 
       <div className="col-8"  >
            <img src={featuredImage} width="100%" height="auto"/>
        </div>    
    </div>
    </div>
  );
}
