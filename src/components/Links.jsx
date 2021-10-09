import React from 'react'

function Links(props) {
    return (
        <a href={props.href} className="hover:text-white text-gray-700 hover:bg-gray-700 cursor-pointer underline hover:no-underline">{props.label}</a>
    )
}

export default Links
