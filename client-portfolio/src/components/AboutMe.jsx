import React from "react";
import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from "./Chat";
import ChatIngles from "./ChatIngles";


export default function AboutMe() {
  const english = useSelector ((state) => state.english);

  useEffect(() => {
            
  },[english]);
    
   

return english?(
  <div class="bg-[url('/public/bg-portfolio.png')] min-h-screen h-full w-full bg-cover bg-center static">
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
                            <p className="animate__animated animate__zoomIn font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-sm  shadow-sm" >
                               Before starting in the IT sector, I got a <strong>Bachelor´s degree in Chemistry</strong>, and I worked in the research area.
                            </p>
                            <p className="animate__animated animate__zoomIn animate__delay-1s font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-sm  shadow-sm">
                            I am currently working as a <strong>Full Stack Developer</strong>. I like to have new problems and challenges to solve daily.
                            </p>
                            <p className="animate__animated animate__zoomIn animate__delay-2s font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-sm shadow-sm">
                              Regarding my <strong>soft skills</strong>, I consider myself a reliable, dedicated, curious person who learns quickly. 
                            </p>
                            <p className="animate__animated animate__zoomIn animate__delay-3s font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-sm  shadow-sm">
                              Currently, I am looking to <strong>continue growing in my IT career</strong>. I want a job which let me continue learning and improving my skills.
                            </p>
                            
                            </div>
                      <div className="my-5">
                      <a
                          href="./CV_JUAREZ_MV_ENGLISH_2024.pdf" download="CV_JUAREZ_MV_ENGLISH.pdf"
                          className="rounded-full  bg-teal-700 border-teal-400 border-solid border-2 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
                        >Download CV</a>
                      </div>
                      
              </div>

            
                
            
              </div> 
              <div className="fixed bottom-0 right-0"><ChatIngles /></div>
         
     
  </div>):
  (
    <div class="bg-[url('/public/bg-portfolio.png')] min-h-screen h-full w-full bg-cover bg-center static">
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
                        <p className="animate__animated animate__zoomIn font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-sm  shadow-sm" >
                          Antes de entrar en el mundo de la programación, me recibí como <strong>Licenciada en Química</strong>, y me desempeñaba en el área de investigación.
                        </p>
                        <p className="animate__animated animate__zoomIn animate__delay-1s font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-sm shadow-sm">
                          Ahora me desempeño como <strong>Desarrolladora Full Stack</strong>. Me gusta tener a diario nuevos problemas y desafíos que resolver.
                        </p>
                        <p className="animate__animated animate__zoomIn animate__delay-2s font-sans text-md my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-sm shadow-sm">
                          En cuanto a mis <strong>habilidades blandas</strong>, me considero una persona responsable, dedicada, curiosa y que aprende rápidamente. 
                        </p>
                        <p className="animate__animated animate__zoomIn animate__delay-3s font-sans  my-6 tracking-width py-2  sm:text-lg rounded-full  bg-white border-teal-400 border-solid border-2 px-6 text-sm   shadow-sm">
                          Actualmente, busco <strong>seguir creciendo en mi carrera IT</strong>. Quiero un empleo que me permita seguir adquiriendo y perfeccionando conocimientos.
                        </p>
                        
                        </div>
                        
                        <div className="my-5">
                        <a
                            href="./CV_JUAREZ_MV_2024" download="CV_JUAREZ_MV.pdf"
                            className="rounded-full  bg-teal-700 border-teal-400 border-solid border-2 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
                          >Descargar CV</a>
                        </div>
                </div>
  
                
                  
  
                </div> 
           
                <div className="fixed bottom-0 right-0"><Chat /></div>
    </div>)
}

