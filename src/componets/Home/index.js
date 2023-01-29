import React from "react";
import Skills from '../Skills';
import featuredImage from '../../assets/images/featued_image.png';
export default function Home() {
  return (
    <div className="mt-4 pt-4 " >
       <div className="font-mono  grid grid-cols-3  sm:grid-col-3 ">
       <div className="flex justify-center content-center	items-center" >
             
             <div className=" m-5">

            
          <h1 style={{alignSlef:'end'}} className="text-xl"> Hi I'm Dhiraj Kumar Nayak  </h1>
          
         
          <h2 style={{alignSlef:'start', color:'red'}}> </h2>
          <h4 style={{ color:'orange'}} >Full stack developer</h4>
          <p style={{color:'blue'}}>#React #React-Native #Vue #Node #Express</p>
          
          <button type="button" className=" bg-cyan-300 p-2">Hire Me</button>
          
          

          <i className="bi bi-facebook"></i>
          
         {/* <h5>dnayak696@gmail.com</h5>

         <h5>8249428963</h5>
         <Skills/> */}
         </div>
       </div> 
       <div className=" lg:col-span-2"  >
            <img src={featuredImage} width="100%" height="auto"/>
        </div>    
    </div>

    </div>
  );
}
