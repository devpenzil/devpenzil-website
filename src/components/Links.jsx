import React from 'react'

function Links(props) {
    return (
        <a href={props.href} className="hover:text-gray-400 cursor-pointer underline hover:no-underline">{props.label}</a>
    )
}

export default Links
