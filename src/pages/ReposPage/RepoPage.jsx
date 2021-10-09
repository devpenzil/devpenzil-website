import axios from 'axios'
import React ,{ useEffect, useState } from 'react'
import {hero, githubapi} from '../../components/Assets'
import Navbar from '../../components/Navbar'
import Loader from '../../components/Loader'
function RepoPage() {
    const [blogs, setBlogs] = useState()
    const fetchingblgs = () => {
        axios.get(githubapi).then((Response)=>{
            setBlogs(Response.data)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
    useEffect(() => {
        fetchingblgs()
    }, [])
    return (
        <div className="w-full min-h-screen dark:bg-gray-800 bg-white">
            <Navbar />
            <div className="container md:w-2/3 mx-auto py-4 px-4">
                <img src={hero} className="w-14 rounded-full mb-4 cursor-pointer" alt="" />

                <div>
                    <div className="text-2xl dark:text-gray-100 font-semibold">Repos</div>
                    {blogs ?
                    blogs.map((obj,id)=>{
                        return(
                            <div key={id} className="mt-8">
                                <div className="text-lg text-indigo-600 dark:text-yellow-400 hover:text-indigo-400 font-medium">
                                 {id+1}  . <a href={obj.html_url}>{obj.full_name} - <span className="text-sm"> {obj.language}</span> </a>
                                </div>
                                <div className="dark:text-green-100 text-gray-500 text-base">{obj.description}</div>
                            </div>
                        )
                    })
                    
                    : <Loader />}
                </div>
            </div>
        </div>
    )
}

export default RepoPage
