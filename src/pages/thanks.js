import React from 'react'

function Thanks() {
  return (
    <div className='flex  bg-slate-600 '>
      <div className='m-16 text-left'>
        <h1 className='text-4xl font-bold mt-16 text-left mb-12 text-white'>
            THANK YOU 
        </h1>
        <p className='mb-12 text-white '>
        Thank you for taking the time to visit my portfolio! I truly appreciate your interest <br/>
        in my work and the opportunity to share my projects with you. Each piece showcased here <br/>
        represents my dedication to developing intuitive and user-friendly web applications. <br/>
        Your support inspires me to continue honing my skills and exploring new technologies. 
        </p>
        <p className='text-white '>
        I hope you found my portfolio insightful and that it gives you a glimpse into my journey  <br/>
        as a developer. If you have any questions or would like to connect further, please feel <br/>
        free to reach out.Your feedback is invaluable, and I look forward to the possibility of  <br/>
        collaborating in the future!
        </p>
      </div>
      <div className='mt-24 '>
        <img className='h-96 w-auto' src={"https://thumbs.dreamstime.com/b/abstract-web-developer-background-blue-laptop-screen-php-code-close-up-175617635.jpg"} alt='Loading' />
      </div>
    </div>
  )
}

export default Thanks
