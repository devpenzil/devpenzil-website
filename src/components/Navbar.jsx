import React from 'react'
import {useHistory} from 'react-router-dom'
import NavButtons from './NavButtons'
function Navbar() {
    const history = useHistory()
    const goto = (path) => {
        history.push(`${path}`)
    }
    return (
        <>
            <div className="container md:w-2/3 mx-auto py-8 px-4  flex space-x-2 overflow-x-auto ">
            <NavButtons label={"Home"} triggerclick={()=> goto("/")}/>
            <NavButtons label={"Blogs"} triggerclick={()=> goto("/blogs")}/>
            <NavButtons label={"Repos"} triggerclick={()=> goto("/repos")}/>
            <NavButtons label={"Contact"} triggerclick={()=> goto("/contact")}/>
            </div>
        </>
    )
}

export default Navbar
