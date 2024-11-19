import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone ,faEnvelope, faGlobe ,faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <div className='flex bg-slate-600 text-white'>
            <div className='m-16'>
                <img className='h-[500px] w-[900px]' src={"https://tse1.mm.bing.net/th?id=OIP.jEzPKIUcRD2LQGrNF-WxHgHaHa&pid=Api&P=0&h=220"} alt='Loading' />
            </div>
            <div className='ml-28'>
                <h1 className='text-4xl font-bold mt-16 text-left mb-12  text-white'>CONTACT US </h1>
                <p className='text text-left text-white'>
                    I’d love to hear from you! Whether you have questions, feedback, or just want to<br></br>
                    connect, feel free to reach out. I’m always open to discussing projects,  collaborations, 
                    just chatting about tech. Drop me a message, and I’ll get back to you as soon as possible.
                </p>
                <div className='flex text-left mt-9 gap-5 text-white'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>0306-2515770</p>
                </div>
                <div className='flex text-left mt-8 gap-5 text-white'>
                <FontAwesomeIcon icon={faEnvelope} />
                    <p>israarali732@gmail.com</p>
                </div>
                <div className='flex text-left mt-8 gap-5 text-white'>
                <FontAwesomeIcon icon={faGlobe} />
                    <p>021-7275645643</p>
                </div>
                <div className='flex text-left mt-8 gap-5 text-white'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>Karachi , Pakistan</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
