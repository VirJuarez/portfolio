import React from "react";
import NavBar from "./NavBar"

export default function AboutMe() {
    
   

return(
  <div class="bg-[url('/public/bg-portfolio.png')] lg:h-screen h-full w-full bg-cover bg-center">
      
      <NavBar />
      
              <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-40 py-5 md:py-15  my-1 lg:my-0  grid grid-cols-1 lg:grid-cols-2 content-center place-content-center ">
                  
                  
                    
              <div className="max-w-fit mx-auto lg:my-0 lg:mx-0 grid content-center place-content-center">
                <img src="https://res.cloudinary.com/pfcampy/image/upload/v1676382613/fotor_2023-1-9_16_38_38_bizmiz.png" alt="img" className="lg:w-96 w-36 "/>
              </div>
              <div className="text-center max-w-sm lg:mx-20 my-10 lg:my-0 ">
                      <p className="font-sans text-xl font-bold tracking-width py-1  text-amber-400 sm:text-3xl">
                        VIRGINIA JUAREZ
                      </p>
                      <p className="font-sans text-md  tracking-width py-2  text-white sm:text-lg">
                        Full Stack Developer with scientific academic background. I am passionate about new challenges and try
                        to solve them with logical thinking and tenacity. I am a curious person; I learn quickly and always perform my
                        job in a responsible and dedicated way.
                      </p>
                      <div className="my-5">
                      <a
                          href="./CV_JUAREZ_MV_ENGLISH.pdf" download="CV_JUAREZ_MV_ENGLISH.pdf"
                          className="rounded-full  bg-teal-700 border-teal-400 border-solid border-2 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
                        >Download CV</a>
                      </div>
              </div>

              
                

              </div> 
         
     
  </div>)
}

