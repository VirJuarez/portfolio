import React from "react";
import { Link } from "react-router-dom";


        

        
        export default function LandingPage() {
          
        
          return (
            <div className="isolate bg-[url('/public/bg-portfolio.png')] bg-no-repeat bg-cover bg-center">
              <main>
                <div className="relative px-6 lg:px-8">
                  <div className="mx-auto max-w-fit py-28 sm:py-48 lg:py-56">
                    <div className="text-center">
                      <p className="font-sans text-7xl font-bold pb-10 tracking-tight text-white sm:text-6xl">
                        WELCOME TO MY PORTFOLIO!
                      </p>
                      <p className="font-sans text-[300px] font-bold tracking-width py-2  text-amber-400 sm:text-6xl">
                        I AM VIRGINIA JUAREZ
                      </p>
                      <h4 className="font-sans mt-6 text-4xl  text-white">
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
        
    