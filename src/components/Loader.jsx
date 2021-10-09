import React from 'react'
import image from '../assets/loading.svg'
function Loader() {
    return (
        <>
            <div className="container w-full">
                <div className="flex flex-col dark:text-gray-200 justify-center items-center">
                    <img src={image} alt="" className='w-64'/>
                    loading..
                </div>
            </div>
        </>
    )
}

export default Loader
