import React from "react";

import profilepicture from "../assets/profilepicture.jpeg"
import appicon from "../assets/appicon.png";
import appIcon2 from "../assets/appIcon2.png";
import appIcon3 from "../assets/appIcon3.png";

function Hero() {
  return (
    <div className="portfolio-container">
      {/* HEADER */}
      <div className="mx-auto max-w-2xl p-4">
        <div className="flex items-center pt-8">
          <div className="flex-1">
            <h1 className="font-SFPro text-2xl font-bold text-black mb-2">Horacio Mota</h1>
            <p className="text-gray-600 text-sm">IOS developer, specializing in Apple's ecosystem using SwiftUI. When I'm not coding, I'm playing poker.</p>
            <p className="text-gray-600 text-xs mt-2 mb-2 ">🌐︎ Based in Ireland</p>

            {/* Ícones para GitHub e LinkedIn */}
            <div className="flex items-center mt-2">

              <div className="bg-white border border-gray-300 rounded-md p-2 mr-4">
                <a href="https://github.com/seu-usuario-github" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>

              <div className="bg-white border border-gray-300 rounded-md p-2 mr-4">
                <a href="https://github.com/seu-usuario-github" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </div>

              <div className="bg-white border border-gray-300 rounded-md p-2 mr-4">
                <a href="https://github.com/seu-usuario-github" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="h-4 w-4 text-gray-600">
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                </a>
              </div>


            </div>
          </div>
          <div className="w-28 h-28 bg-gray-300 overflow-hidden rounded-lg">
            <div className="w-full h-full  overflow-hidden">
              <img src={profilepicture} alt="Profile Picture" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>


      {/* ABOUT */}

      <div className="mx-auto max-w-2xl p-4 ">
        <h2 className="font-SFPro text-xl font-bold text-black mb-4">About</h2>
        <p className="text-sm">
          Im Portuguese <strong>IOS Developer</strong>,with over <strong>7 months</strong> of professional experience in Web development, In 2023 i transitioned my focus to mobile development, dedicating the last year to mastering SwiftUi. I work mostly with <strong>SwiftUI</strong>, Firebase, MVVM architecture and SOLID principals.
          I'm proud to have 2 apps published on the App Store and to actively contribute to the <strong>open-source</strong> community on Github.
        </p>

      </div>

      {/* Projects Section */}
      <div className="mx-auto max-w-2xl">
        <h2 className="font-SFPro text-xl font-bold text-black mb-2 p-4">IOS Apps  </h2>

        <div className="flex mb-4 flex-col md:space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
          {/* Projeto 1*/}
          <div className=" bg-white border border-gray-200 p-4 rounded-sm">
            <div className="flex items-center mb-3">
              <div className="w-14 h-14 bg-gray-300 overflow-hidden rounded-lg">
                <div className="w-full h-full overflow-hidden">
                  <img src={appIcon2} alt="Profile Picture" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="ml-2">
                <h3 className=" font-SFPro text-1xl font-bold text-black text-base leading-6 mb-1">TabNews</h3>
                <div className="flex flex-wrap gap-2">
                  <p className="text-xs bg-green-100 px-2 py-1 rounded-md mr-2">Published</p>
                  <p className="text-xs bg-yellow-100 px-2 py-1 rounded-md mr-2">Open-source</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-2 text-sm mb-3">TabNews is the biggest developer news portal in Latin America, with a user base of 200,000 who share news about the programming world everyday. Write a post and share your knowledge.</p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">SwiftUI</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">MVVM</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">Clean code</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">IOS 15+</p>
              </div>

            </div>
          </div>
          {/* Projeto 2*/}

          <div className="Flex-1 bg-white border border-gray-200 p-4 rounded-md">
            <div className="flex items-center mb-3">
              <div className="w-14 h-14 bg-gray-300 overflow-hidden rounded-lg">
                <div className="w-full h-full overflow-hidden">
                  <img src={appIcon3} alt="Profile Picture" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="ml-2">
                <h3 className="font-SFPro text-1xl font-bold text-black text-base leading-6 mb-1">Car Maintenance</h3>
                <div className="flex flex-wrap gap-2">
                  <p className="text-xs bg-green-100 px-2 py-1 rounded-md mr-2">Published</p>
                  <p className="text-xs bg-yellow-100 px-2 py-1 rounded-md mr-2">Open-source</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-2 text-sm mb-3"> Simplify vehicle care routines. Boost your confidence on your car. Monitor services, receive timely alerts. 
            Take control of your vehicle's health with Car Maintenance the ultimate app.</p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">SwiftUI</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">SOLID</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">Firebase</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">IOS 17+</p>
              </div>

            </div>
          </div>

        </div>

        {/* Segunda coluna de Projetos*/}
        <div className="flex space-x-4 mb-4">
          {/* Projeto 1*/}
          <div className="Flex-1 bg-white border border-gray-200 p-4 rounded-md">
            <div className="flex items-center mb-3">
              <div className="w-14 h-14 bg-gray-300 overflow-hidden rounded-lg">
                <div className="w-full h-full overflow-hidden">
                  <img src={appicon} alt="Profile Picture" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="ml-2">
                <h3 className="font-SFPro text-1xl font-bold text-black text-base leading-6 mb-1">DevLife - Career simulator</h3>
                <div className="flex flex-wrap gap-2">
                  <p className="text-xs bg-red-100 px-2 py-1 rounded-md mr-2">Soon</p>
                  <p className="text-xs bg-blue-100 px-2 py-1 rounded-md mr-2">Personal project</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-2 text-sm mb-3">DevLife, is an interactive life simulation game for aspiring developers. Navigate your career choices, tackle coding challenges, and build your legacy in the tech industry. Will you become a coding prodigy or forge a path in entrepreneurship? Your decisions shape your DevLife journey in this immersive coding simulation!</p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">SwiftUI</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">MVVM</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">Clean code</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">IOS 15+</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">Firebase+</p>
              </div>
              <div className="bg-gray-50 p-2 rounded-md">
                <p className="text-gray-600 mb-0 text-xs">XCTests</p>
              </div>

            </div>
          </div>
        </div>


      </div>

      {/* WORK EXPERIENCE*/}
      <div className="mx-auto max-w-2xl p-4 mb-4">
        <h2 className="font-SFPro text-xl font-bold text-black	mb-2">Work Experience</h2>

        {/* 1 Experience */}
        <div className="mb-7">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className="font-SFPro text-1xl font-bold text-black text-base leading-6">OpenSource Projects</h3>
              <p className="text-xs bg-gray-50 px-2 py-1 rounded-md ml-2">Github</p>
            </div>
            <p className="text-right text-gray-600 text-sm ">2023 - Present</p>
          </div>
          <p className="text-sm mb-2">IOS Developer</p>
          <p className="text-sm">
          <span className="text-pink-500">Car Maintence → 60 contributors</span>
            <br/>
            App finalist in HacktoberFest. The goal was to create an app in 30 days using SwiftUI, Firebase, and MVVM architecture with developers from 7 different countries          </p>
          <br></br>
          <ul className="list-disc ml-6 text-sm">
          <li>Standardized the use of SF Symbols icons using an enum to keep the code cleaner</li>
          <li>Contributed to the translation of the app into 14 languages</li>
          <li>Setup the Firebase Local Emulator</li>
          </ul>
          <br></br>
          <p className="text-sm">
          <span className="text-pink-500">TabNews → 73 contributors</span>
            <br/>
            With over 40.000 monthly accesses and over 200 articles published daily, this is the biggest developer news portal in Latin America. I worked on the team that created the iOS app using SwiftUI and iOS 14+.
            </p>
          <br></br>
          <ul className="list-disc ml-6 text-sm">
            <li>Created 13 endpoints in the TabNews API.</li>
            <li>Implemented a feature that estimated reading time for each article.</li>
            <li>Assisted in conducting code reviews with new contributors to the project.</li>
          </ul>
        </div>

        {/* 2 Experience */}
        <div className="mb-7">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className="font-SFPro text-1xl font-bold text-black text-base leading-6">ADENTIS Portugal</h3>
              <p className="text-xs bg-gray-50 px-2 py-1 rounded-md ml-2">in-site</p>
            </div>
            <p className="text-right text-gray-600 text-sm">Nov 2022 - May 2023</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Intern Frontend Developer</p>
          <p className="text-sm">
            During my internship, I contributed to the development of an application for a large gym network with over 1200 employees.</p>
          <br></br>
          <ul className="list-disc ml-6 text-sm">
            <li>Engaged in the development of dynamic and responsive user interfaces using vanila JavaScript and NodeJS.</li>
            <li>Executed comprehensive refactors to achieve a unified source of truth and state-driven UI changes.</li>
            <li>Participated in the implementation of reactive features using JavaScript and React.js to enhance real-time data updates within the user interface.</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mb-7">
          <h2 className="font-SFPro text-xl font-bold text-black	mb-2">Education</h2>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <h3 className="font-SFPro text-1xl font-bold text-black text-base leading-6">Anhanguera University of Technology</h3>
            </div>
            <p className="text-right text-gray-600 text-sm">2020 - 2023</p>
          </div>
          <p className="text-gray-600 mb-2 text-sm">Bachelor's Degree in Computer Science</p>
        </div>

        {/* Skills Section */}
        <div className="hidden lg:block mb-4">
          <h2 className="font-SFPro text-xl font-bold text-black mb-2">Skills</h2>
          <div className="flex space-x-2">
            <div className="bg-black text-white p-2 rounded-lg">
              <p className="text-xs">IOS 13+</p>
            </div>
            <div className="bg-black text-white p-2 rounded-lg">
              <p className="text-xs">Swift</p>
            </div>
            <div className="bg-black text-white p-2 rounded-lg">
              <p className="text-xs">SwiftUI</p>
            </div>
            <div className="bg-black text-white p-2 rounded-lg">
              <p className="text-xs">SOLID</p>
            </div>
            <div className="bg-black text-white p-2 rounded-lg">
              <p className="text-xs">Clean Code</p>
            </div>
            <div className="bg-black text-white p-2 rounded-lg">
              <p className="text-xs">MVVM</p>
            </div>
            <div className="bg-black text-white p-2 rounded-lg">
              <p className="text-xs">Unit/XCTest</p>
            </div>
            <div className="bg-black text-white p-2 rounded-lg">
              <p className="text-xs">Firebase</p>
            </div>
          </div>
        </div>
      </div>






    </div>

  );
};

export default Hero;
