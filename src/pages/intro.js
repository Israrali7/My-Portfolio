import React from 'react'

function Intro() {
    return (
        <div>
            <div className='flex p-6 bg-slate-600  justify-between'>
                <div className=' m-20'>
                    <div className='mb-12'>
                    <h1 className='text-white text-5xl text-left mb-10'>Introduction</h1>
                    <p className='text-left text-white'>
                        Hello! I’m ISRAAR, a passionate front-end developer specializing in <br /> creating intuitive
                        web applications. With expertise in HTML, CSS, JavaScript, and React, I focus on delivering
                        seamless user experiences that meet client needs and enhance satisfaction.
                    </p>
                    </div>
                    <div className='flex  justify-between gap-9'>
                        <div className=''>
                            <h1 className='text-white text-2xl text-left mb-5'>About me</h1>
                            <p className='text-white text-left'>
                                I’m a front-end developer with a passion for turning ideas into code. My journey started with a curiosity about how websites work, driving me to learn through courses, coding challenges, and projects. I’m committed to continuous learning and creating impactful web experiences.
                            </p>
                        </div>
                        <div className=''>
                            <h1 className='text-white text-2xl text-left mb-5'>About me</h1>
                            <p className='text-white text-left'>
                                Showcasing my journey in front-end development, my portfolio features dynamic projects that combine clean design with cutting-edge web technologies like React and JavaScript. Each project reflects my dedication to creating seamless and engaging user experiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' mr-24  m-20'>
                    <img className='h-[370px] w-[2100px] m-14' src={'https://as1.ftcdn.net/v2/jpg/05/55/66/48/1000_F_555664807_kuUGw3TcpHkdsmyebQx40bejP8JOTlcV.jpg'} alt='LOADING' />
                </div>
            </div>
        </div>
    )
}

export default Intro
