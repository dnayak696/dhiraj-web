import React from "react";
import InsigniaProjects from "./insignia";

const projects = [
    {
        name: 'Chat App',
        description: 'This is the Title of the App'
    },
    {
        name: 'Chart js Implemented',
        description: 'This is the Title of the Chart'
    },
    {
        name: 'Amazon Clone App',
        description: 'This is the Title of the App'
    },
    {
        name: 'Social Media App',
        description: 'This is the Title of the App'
    }
]


function Project (){


      
         
    return(
        <>
           <div className="container font-mono">
                <h1 className="text-xl m-2 p-2 underline  font-bold text-orange-300">My Projects</h1> 

                <InsigniaProjects/>
                   {
                    projects? projects.map((project) =>(
                        <div className="grid grid-cols-3 p-2">
                        <div className="w-20 h-30 bg-blue-300">

                        </div>
                        <div className="w-full col-span-2 bg-red-300 p-2">
                             <h2 className="text-sm font-bold tracking-tighter"> {project.name}</h2>
                             <p className="text-xs"> {project.description} </p>
                             <h5 className="text-xs font-bold tracking-tight">Repo Link </h5>
                        </div>
                </div>
                    )): null
                   } 
                   
            </div>
        </>
    )
}


export default Project;