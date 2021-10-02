import React from 'react'

function NavButtons(props) {
    return (
       <button className="bg-purple-200 px-6 py-1 rounded-lg text-purple-800 font-bold hover:shadow-lg hover:bg-purple-400" onClick={props.triggerclick}>{props.label}</button>
    )
}
export default NavButtons
