import axios from 'axios'
import React from 'react'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import {devapi, hero} from '../../components/Assets'
function BlogPage() {
    const [blogs, setBlogs] = useState([])
    const fetchingblgs = () => {
        axios.get(devapi).then((Response)=>{
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
                    <div className="text-2xl font-semibold">Blogs</div>
                    {blogs ?
                    blogs.map((obj,id)=>{
                        return(
                            <div key={id} className="mt-8">
                                <div className="text-lg text-purple-600 hover:text-purple-400 font-medium">
                                    <a href={obj.url}>
                                    {obj.readable_publish_date} - {obj.title}
                                    </a>
                                </div>
                                <div className="mt-2 text-gray-500 text-base">{obj.description}</div>
                            </div>
                        )
                    })
                    
                    : "Loading.."}
                </div>
            </div>
        </div>
    )
}

export default BlogPage
