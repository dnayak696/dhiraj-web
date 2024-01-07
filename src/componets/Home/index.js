import React from "react";
import featuredImage from '../../assets/images/featued_image1.png';
import Project from "../project";
import Skills from "../Skills";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <div className="mt-2 md:m-4 pt-2 " >
       <div className="font-mono  grid grid-cols-1  sm:grid-cols-3">
       <div className="flex justify-center content-center	items-center" >
             
             <div className="m-2 pl-2 md:m-5">

            
          <h1 style={{alignSlef:'end'}} className="text-xl mb-2 tracking-tighter [word-spacing:0px]"> Hi I'm Dhiraj Kumar Nayak  </h1>
          
         
          <h2 style={{alignSlef:'start', color:'red'}}> </h2>
          <h4 style={{ color:'orange'}} className="mb-2 text-lg tracking-tighter" >Full Stack Developer</h4>
          <p style={{color:'blue'}} className="text-sm">#React #React-Native #Vue #Node #Express</p>

          {/* List of icons shows liked in / github */}

          <ul style={{listStyle:'none',display: 'flex',}}>
            <li className="p-2"> <a href="https://www.linkedin.com/in/dhiraj-kumar-nayak-5a6ab1173/" target="_blank">LinkedIN </a> </li>
            <li className="p-2"> <a href="https://github.com/dnayak696" target="_blank">GitHub </a></li>
          </ul>
          
          <motion.button whileHover={{scale: 1.2}} type="button" className=" transition duration-300 ease-in-out hover:duration-150  bg-cyan-300 hover:bg-cyan-500  p-2 rounded mt-4">Hire Me</motion.button>

          <i className="bi bi-facebook"></i>
          
         {/* <h5>dnayak696@gmail.com</h5>

         <h5>8249428963</h5>
         <Skills/> */}
         </div>
       </div> 
       <div className="sm:col-span-2 flex justify-center iteams-center 	"  >
            <img src={featuredImage} className="shadow shadow-xl shadow-gray-300 rounded-xl" width="90%" height="auto"/>
        
        </div>   
    </div>

    <Project/>
    <Skills/>

  
     

    </div>
  );
}
