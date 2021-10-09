import React from 'react'

function Social() {
    const links = [
        {
            "id": 1,
            "name" : "Github",
            "link" : "https://github.com/devpenzil",
            "icon" : 'fab fa-github'
        },
        {
            "id": 2,
            "name" : "Linkedin",
            "link" : "https://www.linkedin.com/in/ajoalex",
            "icon" : 'fab fa-linkedin'
        },
        {
            "id": 3,
            "name" : "Dev",
            "link" : "https://dev.to/devpenzil",
            "icon" : 'fab fa-dev'
        },
        {
            "id": 3,
            "name" : "Instagram",
            "link" : "https://www.instagram.com/devpenzil/",
            "icon" : 'fab fa-instagram'
        }
    ]
    return (
        <div>
            <div className='flex py-3 px-4 space-x-6  text-2xl'>
                {links.map((obj)=>{
                    return(
                        <div>
                            <a className='text-gray-800 hover:text-purple-500 dark:text-pink-200' href={obj.link}><i class={obj.icon}></i></a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Social
