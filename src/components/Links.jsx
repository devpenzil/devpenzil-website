import React from 'react'

function Links(props) {
    return (
        <a href={props.href} className="hover:text-white dark:text-yellow-500 text-gray-700 hover:bg-gray-700 cursor-pointer underline hover:no-underline">{props.label}</a>
    )
}

export default Links
