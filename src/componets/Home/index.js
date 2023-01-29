import React from "react";
import featuredImage from '../../assets/images/featued_image.png';
import Project from "../project";
export default function Home() {
  return (
    <div className="mt-4 pt-4 " >
       <div className="font-mono  grid grid-cols-1  sm:grid-cols-3">
       <div className="flex justify-center content-center	items-center" >
             
             <div className=" m-5">

            
          <h1 style={{alignSlef:'end'}} className="text-xl mb-2"> Hi I'm Dhiraj Kumar Nayak  </h1>
          
         
          <h2 style={{alignSlef:'start', color:'red'}}> </h2>
          <h4 style={{ color:'orange'}} className="mb-2 text-lg" >Full Stack Developer</h4>
          <p style={{color:'blue'}} className="text-sm">#React #React-Native #Vue #Node #Express</p>
          
          <button type="button" className=" bg-cyan-300 hover:bg-cyan-500  p-2 rounded mt-4">Hire Me</button>
          
          

          <i className="bi bi-facebook"></i>
          
         {/* <h5>dnayak696@gmail.com</h5>

         <h5>8249428963</h5>
         <Skills/> */}
         </div>
       </div> 
       <div className="sm:col-span-2"  >
            <img src={featuredImage} width="100%" height="auto"/>
        </div>    
    </div>

     <Project/>

    </div>
  );
}
