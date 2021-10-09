import React from 'react'

function NavButtons(props) {
    return (
       <button className=" dark:bg-gray-500 dark:text-white px-6 py-2 rounded-lg text-purple-800 font-bold shadow-sm hover:shadow-lg " onClick={props.triggerclick}>{props.label}</button>
    )
}
export default NavButtons
