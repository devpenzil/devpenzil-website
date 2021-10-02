import React from 'react'
import { hero,instagram,linkedin,dev,reactjs,netlify, github } from '../../components/Assets'
import Links from '../../components/Links'
import Navbar from '../../components/Navbar'
function Homepage() {
    return (
        <>
           <div className="w-full min-h-screen bg-white">
               <Navbar />
                <div className="container md:w-2/3 mx-auto py-4 px-4">
                    <img src={hero} className="w-48 rounded-full" alt="hero" />
                    <div className='mt-4'>
                        <div className="text-4xl font-semibold"> Ajo Alex</div>
                        <div className="font-bold text-xl">Front end <span className="text-red-400">Developer</span></div>
                        
                    </div>
                
                
                    <div className="mt-4 font-medium text-lg text-justify  md:leading-loose">
                        I am a front end developer based in kerala with an aim of make something bigger. so i wright blogs for others. I have build some small projects for my timepass and some projects for others. and i love open source contribution and my repos are always public.
                        <br /><br />
                        You can view my code on <Links href={github} label={"Github"}/>. And feel free to contact me, i am active in <Links href={instagram} label={"Instagram"}/>, <Links href={linkedin} label={"Linkedin"}/>, and you can read my blogs on <Links href={dev} label={"Dev"}/>
                        <br /><br />
                        This webisite is build with <Links href={reactjs} label={"React js"}/>  and hosted in <Links href={netlify} label={"Netlify"} />
                    </div>
                </div>
           </div>
        </>
    )
}

export default Homepage
