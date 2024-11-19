import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div >
            <div className='flex bg-slate-600 '>
                <div className=' m-20'>
                    <img className='h-[500px] w-[500px] ' src={"https://png.pngtree.com/png-clipart/20230930/original/pngtree-3d-character-illustration-of-programmer-png-image_13023756.png"} alt="Description" />
                </div>
                <div className='h-[500px] w-[500px] m-20  pt-28'>
                    <h1 className='text-white font-bold text-6xl text-left mb-3'>My</h1>
                    <h1 className='text-white font-bold text-6xl text-left '>Portfolio</h1>
                    <p className='text-white mt-6 text-left'>"I'm a passionate front-end developer with a love for creating responsive and user-friendly web applications. I have experience in technologies like React, Tailwind CSS, and JavaScript."</p>
                    <div className='flex justify-between w-[250px]'>
                        <button className='bg-white text-black p-2 mt-3 '>Explore Now</button>
                        <button className='bg-white text-black p-2 mt-3 '>Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
