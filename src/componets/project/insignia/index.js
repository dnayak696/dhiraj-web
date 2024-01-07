import React from 'react';

export default function InsigniaProjects() {

    return(
        <div className='m-10 flex gap-5'>
              <div>
                {/* <video src={'https://drive.google.com/uc?id=1bBRm2utJElNZ5VdcniXnfUYIwzy2oF72'}/> */}
                <video autoPlay loop  controls width="600" height="350" className="object-cover">
                 <source src={'https://drive.google.com/uc?id=1bBRm2utJElNZ5VdcniXnfUYIwzy2oF72'} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
              </div>
              <div>
                 <h3 className="text-lg font-bold underline text-cyan-500"> Rampsure App</h3>

                 <p> 
                    Rampsure is a mobile app for paravet for Animal Insurace company. The paravets going to Upload the Animal Data and Information
                    Then they will able to collect the data from the application.
                 </p>

                 <p>Tech stack Used</p>
                 <p> #React-Native #Redux #MySql #Node</p>
              </div>
        </div>
    )
}