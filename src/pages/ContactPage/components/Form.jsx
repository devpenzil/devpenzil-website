import React from 'react'

function Form() {
    return (
        <div>
            <div className="mt-6  w-full md:w-96 flex flex-col">
                <form name="contact-form" action="post" netlify className="flex flex-col  px-2">
                    <input className="p-2 bg-purple-200 border-0 outline-none my-2 rounded-lg" type="text" name="name" id="name" placeholder="your name" required/>
                    <input className="p-2 bg-purple-200 border-0 outline-none my-2 rounded-lg" type="email" name="mail" id="mail" placeholder="your email" required />
                    <textarea className="p-2 bg-purple-200 border-0 outline-none my-2 rounded-lg" name="message" id="message" cols="30" rows="10" placeholder="Your Message" required>

                    </textarea>
                    <button className="p-2 my-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-400">send</button>
                </form>
            </div>
        </div>
    )
}

export default Form
