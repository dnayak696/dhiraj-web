import React from "react";
import { motion } from "framer-motion";
import '../Home/index.css'
export default function Skills() {
  return (
    <>
       <div className="container font-mono">
          <h1 className="text-xl m-2 p-2 underline  font-bold text-orange-300"> My Skills</h1>

        <div className="container flex justify-around">
          <motion.div whileHover={{scale: 1.2}} className=" rounded bg-slate-50 shadow p-4">
              <h3 className="text-lg font-bold underline text-cyan-500"> Frontend</h3>

              <ul >
                <motion.li  whileHover={{scale: 1.2}}>React</motion.li>
                <motion.li whileHover={{scale: 1.2}}>Vue</motion.li>
                <motion.li whileHover={{scale: 1.2}}>Angular</motion.li>
              </ul>
          </motion.div>

          <motion.div whileHover={{scale: 1.2}} className=" rounded bg-slate-50 shadow p-4">
             <h3 className="text-lg font-bold underline text-cyan-500"> Backend</h3>
            <ul>
              <motion.li whileHover={{scale: 1.2}} >Node js</motion.li>
              <motion.li whileHover={{scale: 1.2}}>Amplify</motion.li>
              <motion.li whileHover={{scale: 1.2}}>Firebase</motion.li>
            </ul>
          </motion.div>

          <motion.div whileHover={{scale: 1.2}} className=" rounded bg-slate-50 shadow p-4">
            <h3 className="text-lg font-bold underline text-cyan-500">Mobile App</h3>
            <ul>
              <motion.li whileHover={{scale: 1.2}}> React Native</motion.li>
              <motion.li whileHover={{scale: 1.2}}> Ionic </motion.li>
            </ul>
          </motion.div>

          <motion.div whileHover={{scale: 1.2}} className=" rounded bg-slate-50 shadow p-4">
            <h3 className="text-lg font-bold underline text-cyan-500">Databases</h3>
            <ul>
              <motion.li whileHover={{scale: 1.2}}>MongoDB</motion.li>
              <motion.li whileHover={{scale: 1.2}}>Postgres</motion.li>
              <motion.li whileHover={{scale: 1.2}}>MySql</motion.li>
            </ul>
          </motion.div>
        </div>
           
       </div>
    </>
  );
}
