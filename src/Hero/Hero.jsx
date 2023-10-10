import React from "react";
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
          style={{ fontSize: "28px", marginTop: "58px" }}
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

      <div className="mx-auto max-w-screen-lg p-4 ">
        <div className="flex flex-row items-center">
          <div className="mr-4">
            <img src={appicon} alt="Ícone do App" className="h-100" />
          </div>
          <div>
            <h2 className="mb-1" style={{ fontSize: "28px" }}>
              <strong>Therapixie IOS 16+</strong>
            </h2>
            <p className="text-gray-600" style={{ fontSize: "16px" }}>
              Therapixie simplifies therapy. I built using{" "}
              <strong>SwiftUI</strong>, <strong>MVVM patterns</strong>,{" "}
              <strong>SwiftData</strong> and <strong>UITests</strong>
            </p>
          </div>
          <div className="ml-auto">
            <a
              href="URL_DO_SEU_REPOSITORIO_NO_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple"
            >
              Ver no GitHub
            </a>
          </div>
        </div>

        <img src={iPhoneMockup} alt="Descrição da Imagem" className="" />
      </div>
    </>
  );
}

export default Hero;
