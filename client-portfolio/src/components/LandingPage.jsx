import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLanguage } from "../actions";
import { useState, useEffect } from "react";
import Chat from "./Chat";
import ChatIngles from "./ChatIngles";


        

        
        export default function LandingPage() {

          const dispatch = useDispatch();
          const english = useSelector ((state) => state.english);

          const ChangeLanguage=()=>{
            dispatch(changeLanguage())
          }

          useEffect(() => {
            
       },[english]);
          
        
          return english?( 
            <div class="bg-[url('/public/bg-portfolio.png')] min-h-screen  w-full bg-cover bg-center static">

                <div className="px-6 lg:px-8 ">
                  <div className="mx-auto max-w-fit my-auto">
                            
                      <div className="flex flex-col text-center content-center">
                        <p className="animate__animated animate__zoomIn font-sans text-xl font-bold pb-10 pt-36 tracking-tight text-white md:text-7xl">
                          WELCOME TO MY PORTFOLIO!
                        </p>
                        <p className="animate__animated animate__zoomIn animate__delay-1s font-sans md:text-9xl lg:text-8xl font-extrabold tracking-width py-2  text-amber-400 text-2xl">
                          I AM VIRGINIA JUAREZ
                        </p>
                        <h4 className="animate__animated animate__zoomIn animate__delay-1s font-sans mt-6 md:text-4xl lg:text-6xl text-lg text-white">
                          FULL STACK DEVELOPER
                        </h4>


                        <div className="animate__animated animate__zoomIn animate__delay-2s mt-10 flex items-center justify-center gap-x-6">
                          <a
                            href="./CV_VirginiaJuarez_2023_english.pdf" download="CV_JUAREZ_MV_ENGLISH.pdf"
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
                          {/* TOGGLE LANGUAGE */}
                          <div className="animate__animated animate__zoomIn animate__delay-2s mt-10 flex items-center justify-center ">
                          <img class="mr-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEXUlEQVR4nO2Yj09TVxTH+0/NCTKKOCUoKBTZpPwQZUwCbChxZrgYolkIicRsI8vi5rZs7mfCzH6VgdMMgQGR8aMi/gKFMUv7Xkv7XmlL+9q+73Lv6ys8Hq8tUp1Z3je5aZr0nnM/99x77jk1GHTp0qVLly5dz4GiHIe1WglG8Pl3D/By6W8wFltSHrJsGS8ohqzN2DIWW5B7sBudn07Dx/nh/eQiFrN3UHsqAHv+bvh/+QkQRQXIgs2HE60j/wlA4+khPJz3Ijg8BOZgsWQrcxs8755TA8iO2CNVEO7eUUAQpt6+xyiq/v2ZABRWXkXXr3MQWAbus61xG2xlGULWSWpHBRC42gNHQb7046zt4D94D2LArwBZ9gk0nDtLup8KQI7Jgrb3J8G5A1j+5iss5hrpXPJJviMSidtRAVzumkXI6wP/YSdsO16kEwmQv3t1UbKm73tQ0zyQVoDXmgeo3dDkBNiKsvi8pZMnEHHYFf6FcFQNQIyY6//AzQkWwswDOGuPxo24GuoQnp9TGImKIn7u/Rt7y3u3BJBX1oOvr8xC8PDgLnSsbl5JEVaGBlWbN3l7CYffvLExgDxa2kbBOgN098nlpmHMzqTREUMhhUGXO0jD/iQALW2jYFjZzx7Jz0sZG/pZ8kh+yDEjcxMCkEF2llyksIdT7AzJBiQrrNfElAtVb9xICUAR6ddrlJGeU0eaJJDCKmUCSQogj5o1Z5MpP5TwbIYjYlIA8rYE+dhdy9qe8K7df8ih7tSfG64rZYD12cH3/bdY3CVnh2x4L30MURBUzrUAVgb64SgqiGc77kIHRJ9v09lOBYA0SwsgXTL87wBs6xw+78OgA2ToEUBaj1C6L5mehZIo5YdsX4VUm0ejykYnvLAAV1NjfKeddbUQZmeSRmB4jFUtJjQxDsb8quKVDzsYWkLsP7xxD5ISQOv5cbg5ZVElBoP09ZVbO3veLvo6O51++lonA5CLOAcbUNoNh6VXPtYD2HfvpN95Pii9yqbu1AEqGvrwl9Wp2qmVwQE4Sg5Ii8rcRrslweWmEco3S2V1KgC0jD7UQ+siUtuvVYRl4T79dnweW1WO0O0pWKeXUN3UnxggoVFFa2dGaOoWbt1x48jx/i31AxWNfRizutSbRWom037NzVIBkLDaGY2wrineli9/oRnWJ+3IckwWtHdawfHJj6v/xytwsP7kaTQ0PgbG/Ep8Ae4z7yDMsvRiHdC4WFvtiQsqNRLGo0dw1h9bTRj1x7QBojwPT3sbDRv5MVNqQnBkGLNzPBpahhIuYKsAxtioPTmIuzPK/6mIAtevwb4vT+Mhi0bh+6EL9j250nHJyYL3s0sIeAO4+OU9+gdTKs7TAWAsttDj2fHRFHz+sAIi6vWCO9+uBnDWVK/m4ebjiNgeY2iUQWnt9ZSdphPAGBumo9fosV0vFQBx4ijcS1s7m92Pt87d3LSzpwFgjI2mMyOY/2dZG0CXLl26dOnSZXj2+hdh4D9R4Q/X/wAAAABJRU5ErkJggg==" alt="ENGLISH"></img>
                        <label class="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" onChange={ChangeLanguage}></input>
                          <div class="w-11 h-6 bg-teal-700 outline-none ring-4 ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-teal-600"></div>
                        </label>
                        <img class="ml-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVR4nO2YuRHAQAgDlbkZ+s8pRLXI6Y0bwNi7M+QIBPdIAAAAX8ClbAohoOhAsNDJtCXMENfyNZq+simEgKYDwUIn05YIQ9zzVQ1rtOcrGw6y3hF6Mp1Qfi/AL7gim1+JWvyg8QuSMgJqvrLGQrV0iAEAALSQG87JQyXPr+IVAAAAAElFTkSuQmCC" alt="ESPAÑOL"></img>
                          </div>
                      </div>
                     
                  </div>
                  <div className="fixed bottom-0 right-0"><ChatIngles /></div>
                  
                </div>  
               
            </div>)
            :(<div class="bg-[url('/public/bg-portfolio.png')] min-h-screen  w-full bg-cover bg-center static">

            <div className="px-6 lg:px-8 ">
              <div className="mx-auto max-w-fit ">
                        
                  <div className="flex flex-col text-center content-center">
                    <p className="font-sans text-xl font-bold pb-10 pt-36 tracking-tight text-white md:text-7xl">
                      BIENVENIDO A MI PORTAFOLIO!
                    </p>
                    <p className="font-sans md:text-9xl lg:text-8xl font-extrabold tracking-width py-2  text-amber-400 text-2xl">
                      YO SOY VIRGINIA JUAREZ
                    </p>
                    <h4 className="font-sans mt-6 md:text-4xl lg:text-6xl text-lg text-white">
                      FULL STACK DEVELOPER
                    </h4>


                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <a
                        href="./CV_VirginiaJuarez_2023.pdf" download="CV_JUAREZ_MV.pdf"
                        className="rounded-full bg-teal-700 border-teal-400 border-solid border-2 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
                      >
                        Descargar CV
                      </a>
                      <Link to={`/about`} >
                          <button 
                              className="rounded-full bg-teal-700 border-teal-400 border-solid border-2 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-amber-400 hover:border-amber-400"
                                >
                                Sobre Mi <span aria-hidden="true">→</span>
                          </button>
                      </Link>  
                      </div>
                      {/* TOGGLE LANGUAGE */}
                      <div className="mt-10 flex items-center justify-center ">
                        <img class="mr-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEXUlEQVR4nO2Yj09TVxTH+0/NCTKKOCUoKBTZpPwQZUwCbChxZrgYolkIicRsI8vi5rZs7mfCzH6VgdMMgQGR8aMi/gKFMUv7Xkv7XmlL+9q+73Lv6ys8Hq8tUp1Z3je5aZr0nnM/99x77jk1GHTp0qVLly5dz4GiHIe1WglG8Pl3D/By6W8wFltSHrJsGS8ohqzN2DIWW5B7sBudn07Dx/nh/eQiFrN3UHsqAHv+bvh/+QkQRQXIgs2HE60j/wlA4+khPJz3Ijg8BOZgsWQrcxs8755TA8iO2CNVEO7eUUAQpt6+xyiq/v2ZABRWXkXXr3MQWAbus61xG2xlGULWSWpHBRC42gNHQb7046zt4D94D2LArwBZ9gk0nDtLup8KQI7Jgrb3J8G5A1j+5iss5hrpXPJJviMSidtRAVzumkXI6wP/YSdsO16kEwmQv3t1UbKm73tQ0zyQVoDXmgeo3dDkBNiKsvi8pZMnEHHYFf6FcFQNQIyY6//AzQkWwswDOGuPxo24GuoQnp9TGImKIn7u/Rt7y3u3BJBX1oOvr8xC8PDgLnSsbl5JEVaGBlWbN3l7CYffvLExgDxa2kbBOgN098nlpmHMzqTREUMhhUGXO0jD/iQALW2jYFjZzx7Jz0sZG/pZ8kh+yDEjcxMCkEF2llyksIdT7AzJBiQrrNfElAtVb9xICUAR6ddrlJGeU0eaJJDCKmUCSQogj5o1Z5MpP5TwbIYjYlIA8rYE+dhdy9qe8K7df8ih7tSfG64rZYD12cH3/bdY3CVnh2x4L30MURBUzrUAVgb64SgqiGc77kIHRJ9v09lOBYA0SwsgXTL87wBs6xw+78OgA2ToEUBaj1C6L5mehZIo5YdsX4VUm0ejykYnvLAAV1NjfKeddbUQZmeSRmB4jFUtJjQxDsb8quKVDzsYWkLsP7xxD5ISQOv5cbg5ZVElBoP09ZVbO3veLvo6O51++lonA5CLOAcbUNoNh6VXPtYD2HfvpN95Pii9yqbu1AEqGvrwl9Wp2qmVwQE4Sg5Ii8rcRrslweWmEco3S2V1KgC0jD7UQ+siUtuvVYRl4T79dnweW1WO0O0pWKeXUN3UnxggoVFFa2dGaOoWbt1x48jx/i31AxWNfRizutSbRWom037NzVIBkLDaGY2wrineli9/oRnWJ+3IckwWtHdawfHJj6v/xytwsP7kaTQ0PgbG/Ep8Ae4z7yDMsvRiHdC4WFvtiQsqNRLGo0dw1h9bTRj1x7QBojwPT3sbDRv5MVNqQnBkGLNzPBpahhIuYKsAxtioPTmIuzPK/6mIAtevwb4vT+Mhi0bh+6EL9j250nHJyYL3s0sIeAO4+OU9+gdTKs7TAWAsttDj2fHRFHz+sAIi6vWCO9+uBnDWVK/m4ebjiNgeY2iUQWnt9ZSdphPAGBumo9fosV0vFQBx4ijcS1s7m92Pt87d3LSzpwFgjI2mMyOY/2dZG0CXLl26dOnSZXj2+hdh4D9R4Q/X/wAAAABJRU5ErkJggg==" alt="ENGLISH"></img>
                        <label class="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" onChange={ChangeLanguage} checked></input>
                          <div class="w-11 h-6 bg-teal-700 outline-none ring-4 ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-teal-600"></div>
                        </label>
                        <img class="ml-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVR4nO2YuRHAQAgDlbkZ+s8pRLXI6Y0bwNi7M+QIBPdIAAAAX8ClbAohoOhAsNDJtCXMENfyNZq+simEgKYDwUIn05YIQ9zzVQ1rtOcrGw6y3hF6Mp1Qfi/AL7gim1+JWvyg8QuSMgJqvrLGQrV0iAEAALSQG87JQyXPr+IVAAAAAElFTkSuQmCC" alt="ESPAÑOL"></img>
                      </div>
                    
                  </div>
                  
              </div>
              <div className="fixed bottom-0 right-0"><Chat /></div>
            </div>  
           
        </div>)
        }
        
        
    