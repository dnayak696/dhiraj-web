import React from "react";
import Skills from '../Skills';
import featuredImage from '../../assets/images/featued_image.png';
export default function Home() {
  return (
    <div className="mt-4 pt-4 " >
       <div className="d-flex  row ">
       <div className="col-lg-4 pt-4  pl-4 col-sm-12 order-first" >
             
             <div className=" m-5">

            
          <h1 style={{alignSlef:'end'}} className="pl-4"> Hi I'm Dhiraj Kumar Nayak  </h1>
          
         
          <h2 style={{alignSlef:'start', color:'red'}}> </h2>
          <h4 style={{ color:'orange'}}>Web & Mobile App Developer</h4>
          <h5 style={{color:'blue'}}>#React #React-Native #Vue #Node</h5>
          
          <button type="button" className="btn text-center btn-info">Hire Me</button>
          
          

          <i className="bi bi-facebook"></i>
          
         {/* <h5>dnayak696@gmail.com</h5>

         <h5>8249428963</h5>
         <Skills/> */}
         </div>
       </div> 
       <div className="col-lg-8   order-last order-md-1 "  >
            <img src={featuredImage} width="100%" height="auto"/>
        </div>    
    </div>

    </div>
  );
}
