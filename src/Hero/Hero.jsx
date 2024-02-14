import React from "react";
import objectsPhone from "../assets/objectsPhone.png";
import objectsPhoneFull from "../assets/objectsPhoneFull.png";
import relaunchPhone from "../assets/relaunchPhone.png";
import relaunchPhoneFull from "../assets/relaunchPhoneFull.png";

import appIcon3 from "../assets/appIcon3.png";
import appIcon from "../assets/appIcon.png";



function Hero() {
  return (
    
    <div className="flex justify-center items-center">
      {/* Wrap grande ocupando quase 80% da tela */}
      <div className="w-4/5">
           {/* Hero */}
    <div className="text-center py-10">
        <h1 className="text-5xl font-SFPro font-bold text-black">Horacio Mota</h1>
        <h2 className="text-3xl font-SFPro text-black">Mobile Developer</h2>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Coluna esquerda */}
          <div className="col-span-1">
            {/* Parágrafo */}
            <div className="p-4 bg-white rounded shadow h-30 overflow-auto">
            <p className="text-2xl text-gray-700 font-SFPro">
            👋 I’m Hal, a software engineer living in Brooklyn and building apps for iOS. <br/> 
            <br/>
            Currently I’m an iOS engineer at <span className="text-pink-500">Robinhood</span>.
             Previously, I led development of <span className="text-pink-500">Quartz’s relaunched news app</span>, and before that, I worked on <span className="text-pink-500">Quartz’s conversational news app</span>. 
             <br/>
             <br/>Here’re some projects I’ve worked on recently.
          </p>
            </div>
         {/* Ícone do app */}
         <div className="flex items-center mt-4 p-4 pb-0">
              <img src={appIcon3} alt="App Icon" className="w-14 h-14 mr-4" />
              <div>
                <h3 className="font-SFPro text-2xl font-bold text-black text-base leading-6">Car Maintenance</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  <p className="text-xs bg-blue-100 px-2 py-1 rounded-md mr-2">IOS</p>
                  <p className="text-xs bg-green-100 px-2 py-1 rounded-md mr-2">Published</p>
                  <p className="text-xs bg-yellow-100 px-2 py-1 rounded-md mr-2">Open-source</p>
                </div>
              </div>
            </div>
            {/* Quadrado grande vermelho ocupando 30% da altura da coluna */}
            <div className="p-4 rounded shadow h-70vh">
            <p className="ont-SFPro text-md text-gray-700 pb-4">aaaA simple app to help you keep track of your car maintenance schedule.</p>
            <img src={relaunchPhoneFull} alt="Relaunch Phone" className="w-full h-auto" style={{ transform: 'scale(1.1)' }} />
            </div>
          </div>
          {/* Coluna direita */}
          <div className="col-span-1">
              {/* Ícone do app */}
              <div className="flex items-center mt-4 p-4 pb-0">
              <img src={appIcon3} alt="App Icon" className="w-14 h-14 mr-4" />
              <div>
                <h3 className="font-SFPro text-2xl font-bold text-black text-base leading-6">Car Maintenance</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  <p className="text-xs bg-blue-100 px-2 py-1 rounded-md mr-2">IOS</p>
                  <p className="text-xs bg-green-100 px-2 py-1 rounded-md mr-2">Published</p>
                  <p className="text-xs bg-yellow-100 px-2 py-1 rounded-md mr-2">Open-source</p>
                </div>
              </div>
            </div>
            {/* Quadrado vermelho ocupando 70vh */}
            <div className="p-4 rounded shadow h-70vh">
            <p className="ont-SFPro text-md text-gray-700 pb-4">aaaA simple app to help you keep track of your car maintenance schedule.</p>
            <img src={relaunchPhoneFull} alt="Relaunch Phone" className="w-full h-auto" style={{ transform: 'scale(1.1)' }} />
            </div>


              {/* Ícone do app */}
              <div className="flex items-center mt-4 p-4 pb-0">
              <img src={appIcon3} alt="App Icon" className="w-14 h-14 mr-4" />
              <div>
                <h3 className="font-SFPro text-2xl font-bold text-black text-base leading-6">Car Maintenance</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  <p className="text-xs bg-blue-100 px-2 py-1 rounded-md mr-2">IOS</p>
                  <p className="text-xs bg-green-100 px-2 py-1 rounded-md mr-2">Published</p>
                  <p className="text-xs bg-yellow-100 px-2 py-1 rounded-md mr-2">Open-source</p>
                </div>
              </div>
            </div>
            {/* Quadrado cinza ocupando 70vh */}
            <div className="p-4 rounded shadow h-70vh">
            <p className="ont-SFPro text-md text-gray-700 pb-4">aaaA simple app to help you keep track of your car maintenance schedule.</p>
            <img src={relaunchPhoneFull} alt="Relaunch Phone" className="w-full h-auto" style={{ transform: 'scale(1.1)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
