import React from "react";
import NavBar from "./NavBar"

export default function AboutMe() {
    
    return(
    <div className="isolate bg-[url('/public/bg-portfolio.png')] bg-no-repeat bg-cover bg-center">
        <NavBar/>
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-fit py-28 sm:py-48 lg:py-56 flex-col">
                   <div>
                    {/* imagen */}
                    <img alt="img"></img>
                   </div>
                    <div className="text-center">
                      <p className="font-sans text-[300px] font-bold tracking-width py-2  text-amber-400 sm:text-6xl">
                        I AM VIRGINIA JUAREZ
                      </p>
                      <h4 className="font-sans mt-6 text-4xl  text-white">
                        FULL STACK DEVELOPER
                      </h4>
                    <p className="font-sans text-[300px] font-bold tracking-width py-2  text-amber-400 sm:text-6xl">
                        blablablabla
                      </p>
                    </div>

                </div>

            </div>
        </main>
    </div>)
}
