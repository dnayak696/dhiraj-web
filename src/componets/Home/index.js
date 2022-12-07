import React from "react";
import Skills from '../Skills';
import featuredImage from '../../assets/images/featued_image.png';
export default function Home() {
  return (
    <div className="mt-4 pt-4" >
       <div className="d-flex m-4 p-4">
       <div className="col-4 pt-4 pl-2" style={{  justifyContent:'center'}}>
      
          <h1 style={{alignSlef:'end', paddingLeft:'40%', alignSelf:'center'}} className="pl-4"> Hii!  </h1>
          
          <div className="text-center">
          <h2 style={{alignSlef:'start', color:'red'}}> I'm Dhiraj Kumar Nayak</h2>
          <h4 style={{ color:'orange'}}>Web & Mobile App Developer</h4>
          <h5 style={{color:'blue'}}>#React #React-Native #Vue #Node</h5>
          
          <button type="button" className="btn text-center btn-info">Hire Me</button>
          </div>
          

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
