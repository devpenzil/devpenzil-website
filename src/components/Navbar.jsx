import React from 'react'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import NavButtons from './NavButtons'
function Navbar() {
    const [dark, setDark] = useState(false)
    const history = useHistory()
    const goto = (path) => {
        history.push(`${path}`)
    }
    return (
        <>
        <darkMode />
            <div className="container md:w-2/3 mx-auto py-8 px-4  flex space-x-2 overflow-x-auto ">
            <NavButtons label={'Home'} triggerclick={()=> goto("/")}/>
            <NavButtons label={"Blogs"} triggerclick={()=> goto("/blogs")}/>
            <NavButtons label={"Repos"} triggerclick={()=> goto("/repos")}/>
            <NavButtons label={"Timeline"} triggerclick={()=> goto("/timeline")}/>
            <NavButtons label={"Contact"} triggerclick={()=> goto("/contact")}/>
            <button className='dark:bg-gray-500 dark:text-white px-6 py-2 rounded-lg text-purple-800 font-bold shadow-sm hover:shadow-lg ' onClick={()=>setDark(!dark)}>
                {dark ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i> }
            </button>
            </div>
        </>
    )
}

export default Navbar
