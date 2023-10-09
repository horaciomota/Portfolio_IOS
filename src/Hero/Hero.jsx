import React from 'react';

function Hero() {
  return (

<>
    <div className="mx-auto max-w-screen-lg p-4 bg-white-100 h-180vh">
    <h2 className='text-blue-600'>Ill not wast your time. I am...</h2>
    <h1 style={{ fontSize: '96px', fontWeight: 'bold' }}>Horacio Mota</h1>
    <p style={{ fontSize: '48px' }}>
  I'm a Junior iOS Developer from Portugal based in <strong>Irlanda</strong>, passionate about <strong>Open Source</strong> projects and <strong>Swift</strong>.
  I'm proud to have one app published on @Appstore. In my free time, I'm <strong>playing poker</strong>.
</p>


<ul className="flex space-x-4">
    <li>
      <a href="#" className="text-blue-600 hover:text-blue-700">Resume</a>
    </li>
    <li>
      <a href="#" className="text-blue-600 hover:text-blue-700">GitHub</a>
    </li>
    <li>
      <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
    </li>
  </ul> 
  </div>



</>
  
  )}

export default Hero;