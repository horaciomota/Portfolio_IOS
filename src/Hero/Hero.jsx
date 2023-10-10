import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import memoji from "../assets/memoji.gif";
import iPhoneMockup from "../assets/iPhoneMockup.png";
import appicon from "../assets/appicon.png";

function Hero() {
  return (
    <>
      <div className="mx-auto max-w-screen-lg p-4 bg-white-100 h-80vh">
        <div className="mx-auto max-w-screen-lg p-4">
          <div className="flex flex-row items-center">
            <div className="mr-4">
              <img src={memoji} alt="Descrição da Imagem" className="h-60" />
            </div>
            <div className="" style={{ marginTop: "40px" }}>
              <h2 className="text-blue-600 mb-0" style={{ fontSize: "28px" }}>
                Ill not waste your time. I am...
              </h2>
              <h1
                style={{
                  fontSize: "88px",
                  fontWeight: "bold",
                  marginTop: "-20px",
                }}
              >
                <strong>Horacio Mota</strong>
              </h1>
            </div>
          </div>
        </div>

        <p style={{ fontSize: "48px" }}>
          I'm a Junior iOS Developer from Portugal based in{" "}
          <strong>Ireland</strong>, passionate about{" "}
          <strong>Open Source</strong> projects and <strong>Swift</strong>. I'm
          proud to have one app published on <strong>@Appstore</strong>. In my
          free time, I'm <strong>playing poker</strong>.
        </p>

        <ul
          className="flex space-x-4"
          style={{ fontSize: "28px", marginTop: "28px", marginBottom: "28px" }}
        >
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Resume
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div style={{ backgroundColor: "#f5f5f5" }}>
        <div className="mx-auto max-w-screen-lg p-4 ">
          <div className="flex flex-row items-center flex-wrap">
            <div className="mr-4">
              <img src={appicon} alt="Ícone do App" className="h-20" />
            </div>
            <div className="flex-grow">
              <h2 className="mb-1" style={{ fontSize: "22px" }}>
                <strong>Therapixie IOS 16+</strong>
              </h2>
              <p className="text-gray-600" style={{ fontSize: "16px" }}>
                Therapixie has a designed which simplifies therapy and offers
                self-help instruments.
              </p>
            </div>
            <div className="ml-auto hidden md:block">
              <a
                href="URL_DO_SEU_REPOSITORIO_NO_GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple"
                style={{ padding: "10px 20px" }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ marginRight: "8px" }}
                />
                Source Code
              </a>
            </div>

            <div className="flex mt-4 flex-wrap hidden sm:block">
              <div className="flex mt-2 flex-wrap">
                <div className="bg-blue-100 text-gray-500 px-3 py-1 mr-2 rounded-full text-sm">
                  SwiftUI
                </div>
                <div className="bg-blue-100 text-gray-500 px-3 py-1 mr-2 rounded-full text-sm">
                  CoreData
                </div>
                <div className="bg-blue-100 text-gray-500 px-3 py-1 mr-2 rounded-full text-sm">
                  MVVM
                </div>
                <div className="bg-blue-100 text-gray-500 px-3 py-1 mr-2 rounded-full text-sm">
                  Clean Code
                </div>
                <div className="bg-blue-100 text-gray-500 px-3 py-1 mr-2 rounded-full text-sm">
                  Swift Package Manager
                </div>
                <div className="bg-blue-100 text-gray-500 px-3 py-1 mr-2 rounded-full text-sm">
                  Combine Framework
                </div>
                <div className="bg-blue-100 text-gray-500 px-3 py-1 mr-2 rounded-full text-sm">
                  XCTest
                </div>
              </div>
            </div>
          </div>

          <img src={iPhoneMockup} alt="Descrição da Imagem" className="" />

          <div className="md:hidden flex justify-center items-center h-full">
            <a
              href="URL_DO_SEU_REPOSITORIO_NO_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple md:w-full "
            >
              Check on GitHub (Mobile)
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
