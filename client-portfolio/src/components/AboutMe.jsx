import React from "react";
import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function AboutMe() {
  const english = useSelector ((state) => state.english);

  useEffect(() => {
            
  },[english]);
    
   

return english?(
  <div class="bg-[url('/public/bg-portfolio.png')] lg:h-screen h-full w-full bg-cover bg-center">
    <div className="flex justify-end xl:justify-start ">
      <img src="/VJ_logo2.svg" alt="img" className="xl:w-40 fixed xl:mt-5 xl:ml-5 w-10 mr-3 xl:mr-0 mt-3"/> 
    </div>  
      <NavBar />
      
      <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-48 py-5 md:py-15  my-1 lg:my-0  grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3 content-center place-content-center ">
      
                    
                      
                    <div className="max-w-fit mx-auto lg:my-0 lg:mx-0 grid content-center place-content-center ">
                      <img src="https://res.cloudinary.com/pfcampy/image/upload/v1676646107/fotor_2023-1-9_16_38_38_wlmxhw.png" alt="img" className="lg:w-96 w-36 "/>
                    </div>
                    <div className="text-center  lg:mx-0 my-6 lg:my-0 grid col-span-2">
                            <p className="font-sans text-xl font-bold tracking-width py-1  text-amber-400 sm:text-3xl">
                              Hello! I am Virginia Juarez
                            </p>
                            <div className="">
                            <p className="font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-base  shadow-sm" >
                               Before starting in the IT sector, I got a <strong>Bachelor´s degree in Chemistry</strong>, and I worked in the research area.
                            </p>
                            <p className="font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-base  shadow-sm">
                              I graduated as a <strong>Full Stack Developer</strong> from Henry Bootcamp. I like to have new problems and challenges to solve daily.
                            </p>
                            <p className="font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-base  shadow-sm">
                              Regarding my <strong>soft skills</strong>, I consider myself a reliable, dedicated, curious person who learns quickly. 
                            </p>
                            <p className="font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-base  shadow-sm">
                              Currently, I am looking for <strong>my first job on IT</strong>. I want a job which let me continue learning and improving my skills.
                            </p>
                            
                            </div>
                      <div className="my-5">
                      <a
                          href="./CV_VirginiaJuarez_2023_english.pdf" download="CV_JUAREZ_MV_ENGLISH.pdf"
                          className="rounded-full  bg-teal-700 border-teal-400 border-solid border-2 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
                        >Download CV</a>
                      </div>
              </div>

              
                

              </div> 
         
     
  </div>):
  (
    <div class="bg-[url('/public/bg-portfolio.png')] lg:h-screen h-full w-full bg-cover bg-center">
       <div className="flex justify-end xl:justify-start ">
      <img src="/VJ_logo2.svg" alt="img" className="xl:w-40 fixed xl:mt-5 xl:ml-5 w-10 mr-3 xl:mr-0 mt-3"/> 
    </div>
        
        <NavBar />
        
                <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-48 py-5 md:py-15  my-1 lg:my-0  grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3 content-center place-content-center ">
                    
          
                      
                <div className="max-w-fit mx-auto lg:my-0lg:mx-0 grid content-center  ">
                  <img src="https://res.cloudinary.com/pfcampy/image/upload/v1676646107/fotor_2023-1-9_16_38_38_wlmxhw.png" alt="img" className="lg:w-96 w-36  "/>
                </div>
                <div className="text-center  lg:mx-0 my-6 lg:my-0 grid col-span-2">
                        <p className="font-sans text-xl font-bold tracking-width py-1  text-amber-400 sm:text-3xl">
                          Hola! Soy Virginia Juarez
                        </p>
                        <div className="">
                        <p className="font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-base   shadow-sm" >
                          Antes de entrar en el mundo de la programación, me recibí como <strong>Licenciada en Química</strong>, y me desempeñaba en el área de investigación.
                        </p>
                        <p className="font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-base shadow-sm">
                          Me gradué como <strong>Desarrolladora Full Stack</strong> en el Bootcamp de Henry. Me gusta tener a diario nuevos problemas y desafíos que resolver.
                        </p>
                        <p className="font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-base  shadow-sm">
                          En cuanto a mis <strong>habilidades blandas</strong>, me considero una persona responsable, dedicada, curiosa y que aprende rápidamente. 
                        </p>
                        <p className="font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-base   shadow-sm">
                          Actualmente, estoy buscando <strong>mi primer empleo en IT</strong>. Quiero un empleo que me permita seguir adquiriendo y perfeccionando conocimientos.
                        </p>
                        
                        </div>
                        
                        <div className="my-5">
                        <a
                            href="./CV_VirginiaJuarez_2023.pdf" download="CV_JUAREZ_MV.pdf"
                            className="rounded-full  bg-teal-700 border-teal-400 border-solid border-2 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
                          >Descargar CV</a>
                        </div>
                </div>
  
                
                  
  
                </div> 
           
       
    </div>)
}

