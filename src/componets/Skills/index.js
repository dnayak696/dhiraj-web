import React from "react";
import { motion } from "framer-motion";
import '../Home/index.css'
export default function Skills() {
  return (
    <>
       <div className="container font-mono">
          <h1 className="text-xl m-2 p-2 underline  font-bold text-orange-300"> My Skills</h1>

        <div className="container flex justify-around">
          <div className=" rounded bg-slate-50 p-4">
              <h3 className="text-lg font-bold underline text-cyan-500"> Frontend</h3>

              <ul >
                <motion.li  whileHover={{scale: 1.2}}>React</motion.li>
                <motion.li whileHover={{scale: 1.2}}>Vue</motion.li>
                <motion.li whileHover={{scale: 1.2}}>Angular</motion.li>
              </ul>
          </div>

          <div className=" rounded bg-slate-50 p-4">
             <h3 className="text-lg font-bold underline text-cyan-500"> Backend</h3>
            <ul>
              <li>Node js</li>
              <li>Amplify</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div className=" rounded bg-slate-50 p-4">
            <h3 className="text-lg font-bold underline text-cyan-500">Mobile App</h3>
            <ul>
              <li> React Native</li>
              <li> Ionic </li>
            </ul>
          </div>

          <div className=" rounded bg-slate-50 p-4">
            <h3 className="text-lg font-bold underline text-cyan-500">Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>Postgres</li>
              <li>MySql</li>
            </ul>
          </div>
        </div>
           
       </div>
    </>
  );
}
