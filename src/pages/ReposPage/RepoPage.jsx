import axios from 'axios'
import React from 'react'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import {hero, githubapi} from '../../components/Assets'
function RepoPage() {
    const [blogs, setBlogs] = useState([])
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
    const history = useHistory()
    const jumbtopage = (path) => {
        history.push(`/${path}`)
    } 
    return (
        <div className="w-full min-h-screen bg-white">
            <div className="container md:w-2/3 mx-auto py-10 px-4">
                <img onClick={()=>jumbtopage("")} src={hero} className="w-14 rounded-full mb-4 cursor-pointer" alt="" />

                <div>
                    <div className="text-2xl font-semibold">Repos</div>
                    {blogs ?
                    blogs.map((obj,id)=>{
                        return(
                            <div key={id} className="mt-8">
                                <div className="text-lg text-indigo-600 hover:text-indigo-400 font-medium">
                                 {id+1}  . <a href={obj.html_url}>{obj.full_name} - <span className="text-sm"> {obj.language}</span> </a>
                                </div>
                                <div className=" text-gray-500 text-base">{obj.description}</div>
                            </div>
                        )
                    })
                    
                    : "Loading.."}
                </div>
            </div>
        </div>
    )
}

export default RepoPage
