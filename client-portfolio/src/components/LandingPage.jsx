import React from "react";
import { Link } from "react-router-dom";


        

        
        export default function LandingPage() {
          
        
          return (
            <div className="isolate bg-[url('/public/bg-portfolio.png')] bg-no-repeat bg-cover w-screen h-screen bg-center">
              <main>
                <div className="relative px-6 lg:px-8 ">
                  <div className="mx-auto max-w-fit py-56 sm:py-48 lg:py-40  my-auto ">
                    <div className="flex flex-col text-center content-center">
                      <p className="font-sans text-xl font-bold pb-10 tracking-tight text-white md:text-7xl">
                        WELCOME TO MY PORTFOLIO!
                      </p>
                      <p className="font-sans md:text-9xl lg:text-8xl font-extrabold tracking-width py-2  text-amber-400 text-2xl">
                        I AM VIRGINIA JUAREZ
                      </p>
                      <h4 className="font-sans mt-6 md:text-4xl lg:text-6xl text-lg text-white">
                        FULL STACK DEVELOPER
                      </h4>
                      <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                          href="#"
                          className="rounded-full bg-teal-700 border-teal-400 border-solid border-2 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
                        >
                          Download CV
                        </a>
                        <Link to={`/about`} >
                            <button 
                                className="rounded-full bg-teal-700 border-teal-400 border-solid border-2 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
                                  >
                                   About Me <span aria-hidden="true">→</span>
                            </button>
                        </Link>
                        
                      </div>
                    </div>
                  </div>

                </div>
              </main>
            </div>
          )
        }
        
    