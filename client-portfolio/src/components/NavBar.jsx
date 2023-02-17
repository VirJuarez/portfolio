import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { changeLanguage } from "../actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const navigation = [
  { name: 'ABOUT ME', href: 'about'},
  { name: 'SKILLS', href: 'skills'},
  { name: 'PROJECTS', href: 'projects' },
  { name: 'CONTACT ME', href: 'contact'},
]

const navegacion = [
  { name: 'SOBRE MI', href: 'about'},
  { name: 'HABILIDADES', href: 'skills'},
  { name: 'PROYECTOS', href: 'projects' },
  { name: 'CONTACTO', href: 'contact'},
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
let currentActivePage = window.location.pathname.slice(1);

const dispatch = useDispatch();
const english = useSelector ((state) => state.english);


const ChangeLanguage=()=>{
  dispatch(changeLanguage())
}

useEffect(() => {
            
},[english]);


//const [isActive, setIsActive] = React.useState(currentActivePage || "")


const handleClickLink = () => {
    document.documentElement.scrollTop = 0
    //setIsActive(page);
  }

  return english? (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">


                {/* MENU PARA COMPU */}
                <div className="flex flex-1 items-center justify-center md:items-stretch ">
                <div className="hidden md:ml-6 md:block">
                  <div className="grid grid-cols-5 gap-x-10">
                    {navigation.map((item) => (
                        <Link onClick={() => handleClickLink()} to={`/${item.href}`} key={item.href}>
                            <button key={item.href}
                                className={classNames(
                                    item.href === currentActivePage ? 'font-sans text-amber-400 font-black text-md' : ' font-sans font-bold text-gray-300 hover:bg-amber hover:text-white',
                                    'px-3 py-2 rounded-full text-md font-medium'
                                  )}>
                                         {item.name}
                            </button>
                        </Link>
                    ))}
                    {/* TOGGLE LANGUAGE */}
                  <div className=" flex items-center justify-end ">
                          <img class="mr-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEXUlEQVR4nO2Yj09TVxTH+0/NCTKKOCUoKBTZpPwQZUwCbChxZrgYolkIicRsI8vi5rZs7mfCzH6VgdMMgQGR8aMi/gKFMUv7Xkv7XmlL+9q+73Lv6ys8Hq8tUp1Z3je5aZr0nnM/99x77jk1GHTp0qVLly5dz4GiHIe1WglG8Pl3D/By6W8wFltSHrJsGS8ohqzN2DIWW5B7sBudn07Dx/nh/eQiFrN3UHsqAHv+bvh/+QkQRQXIgs2HE60j/wlA4+khPJz3Ijg8BOZgsWQrcxs8755TA8iO2CNVEO7eUUAQpt6+xyiq/v2ZABRWXkXXr3MQWAbus61xG2xlGULWSWpHBRC42gNHQb7046zt4D94D2LArwBZ9gk0nDtLup8KQI7Jgrb3J8G5A1j+5iss5hrpXPJJviMSidtRAVzumkXI6wP/YSdsO16kEwmQv3t1UbKm73tQ0zyQVoDXmgeo3dDkBNiKsvi8pZMnEHHYFf6FcFQNQIyY6//AzQkWwswDOGuPxo24GuoQnp9TGImKIn7u/Rt7y3u3BJBX1oOvr8xC8PDgLnSsbl5JEVaGBlWbN3l7CYffvLExgDxa2kbBOgN098nlpmHMzqTREUMhhUGXO0jD/iQALW2jYFjZzx7Jz0sZG/pZ8kh+yDEjcxMCkEF2llyksIdT7AzJBiQrrNfElAtVb9xICUAR6ddrlJGeU0eaJJDCKmUCSQogj5o1Z5MpP5TwbIYjYlIA8rYE+dhdy9qe8K7df8ih7tSfG64rZYD12cH3/bdY3CVnh2x4L30MURBUzrUAVgb64SgqiGc77kIHRJ9v09lOBYA0SwsgXTL87wBs6xw+78OgA2ToEUBaj1C6L5mehZIo5YdsX4VUm0ejykYnvLAAV1NjfKeddbUQZmeSRmB4jFUtJjQxDsb8quKVDzsYWkLsP7xxD5ISQOv5cbg5ZVElBoP09ZVbO3veLvo6O51++lonA5CLOAcbUNoNh6VXPtYD2HfvpN95Pii9yqbu1AEqGvrwl9Wp2qmVwQE4Sg5Ii8rcRrslweWmEco3S2V1KgC0jD7UQ+siUtuvVYRl4T79dnweW1WO0O0pWKeXUN3UnxggoVFFa2dGaOoWbt1x48jx/i31AxWNfRizutSbRWom037NzVIBkLDaGY2wrineli9/oRnWJ+3IckwWtHdawfHJj6v/xytwsP7kaTQ0PgbG/Ep8Ae4z7yDMsvRiHdC4WFvtiQsqNRLGo0dw1h9bTRj1x7QBojwPT3sbDRv5MVNqQnBkGLNzPBpahhIuYKsAxtioPTmIuzPK/6mIAtevwb4vT+Mhi0bh+6EL9j250nHJyYL3s0sIeAO4+OU9+gdTKs7TAWAsttDj2fHRFHz+sAIi6vWCO9+uBnDWVK/m4ebjiNgeY2iUQWnt9ZSdphPAGBumo9fosV0vFQBx4ijcS1s7m92Pt87d3LSzpwFgjI2mMyOY/2dZG0CXLl26dOnSZXj2+hdh4D9R4Q/X/wAAAABJRU5ErkJggg==" alt="ENGLISH"></img>
                        <label class="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" onChange={ChangeLanguage}></input>
                          <div class="w-11 h-6 bg-teal-700 outline-none ring-4 ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-teal-600"></div>
                        </label>
                        <img class="ml-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVR4nO2YuRHAQAgDlbkZ+s8pRLXI6Y0bwNi7M+QIBPdIAAAAX8ClbAohoOhAsNDJtCXMENfyNZq+simEgKYDwUIn05YIQ9zzVQ1rtOcrGw6y3hF6Mp1Qfi/AL7gim1+JWvyg8QuSMgJqvrLGQrV0iAEAALSQG87JQyXPr+IVAAAAAElFTkSuQmCC" alt="ESPAÑOL"></img>
                          </div>
                  </div>
                  
                </div>
              </div>


                {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 font-sans text-amber-400 font-extrabold">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <button className="block h-6 w-20" aria-hidden="true" >MENU ↑</button>
                  ) : (
                    <button className="block h-6 w-25" aria-hidden="true" >{currentActivePage.toUpperCase()} ↓</button>
                  )}
                </Disclosure.Button>
              </div>




            </div>
          </div>

                {/* MENU DESPLEGABLE CELU */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 flex-col">
              {navegacion.map((item) => (
                <div>
                 <Link onClick={() => handleClickLink()} to={`/${item.href}`} key={item.href}>
                 <button key={item.href}
                     className={classNames(
                         item.href === currentActivePage ? 'font-sans text-amber-400 font-black' : ' font-sans font-extrabold text-gray-300 hover:bg-amber hover:text-white',
                         'px-3 py-2 rounded-full text-sm font-medium'
                       )}>
                              {item.name}
                 </button>
             </Link>
             </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ):
  (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">


                {/* MENU PARA COMPU */}
                <div className="flex flex-1 items-center justify-center md:items-stretch ">
                <div className="hidden md:ml-6 md:block">
                  <div className="grid grid-cols-5 gap-x-10">
                    {navegacion.map((item) => (
                        <Link onClick={() => handleClickLink()} to={`/${item.href}`} key={item.href}>
                            <button key={item.href}
                                className={classNames(
                                    item.href === currentActivePage ? 'font-sans text-amber-400 font-black text-md' : ' font-sans font-bold text-gray-300 hover:bg-amber hover:text-white',
                                    'px-3 py-2 rounded-full text-md font-medium'
                                  )}>
                                         {item.name}
                            </button>
                        </Link>
                    ))}
                    {/* TOGGLE LANGUAGE */}
                  <div className=" flex items-center justify-end ">
                          <img class="mr-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEXUlEQVR4nO2Yj09TVxTH+0/NCTKKOCUoKBTZpPwQZUwCbChxZrgYolkIicRsI8vi5rZs7mfCzH6VgdMMgQGR8aMi/gKFMUv7Xkv7XmlL+9q+73Lv6ys8Hq8tUp1Z3je5aZr0nnM/99x77jk1GHTp0qVLly5dz4GiHIe1WglG8Pl3D/By6W8wFltSHrJsGS8ohqzN2DIWW5B7sBudn07Dx/nh/eQiFrN3UHsqAHv+bvh/+QkQRQXIgs2HE60j/wlA4+khPJz3Ijg8BOZgsWQrcxs8755TA8iO2CNVEO7eUUAQpt6+xyiq/v2ZABRWXkXXr3MQWAbus61xG2xlGULWSWpHBRC42gNHQb7046zt4D94D2LArwBZ9gk0nDtLup8KQI7Jgrb3J8G5A1j+5iss5hrpXPJJviMSidtRAVzumkXI6wP/YSdsO16kEwmQv3t1UbKm73tQ0zyQVoDXmgeo3dDkBNiKsvi8pZMnEHHYFf6FcFQNQIyY6//AzQkWwswDOGuPxo24GuoQnp9TGImKIn7u/Rt7y3u3BJBX1oOvr8xC8PDgLnSsbl5JEVaGBlWbN3l7CYffvLExgDxa2kbBOgN098nlpmHMzqTREUMhhUGXO0jD/iQALW2jYFjZzx7Jz0sZG/pZ8kh+yDEjcxMCkEF2llyksIdT7AzJBiQrrNfElAtVb9xICUAR6ddrlJGeU0eaJJDCKmUCSQogj5o1Z5MpP5TwbIYjYlIA8rYE+dhdy9qe8K7df8ih7tSfG64rZYD12cH3/bdY3CVnh2x4L30MURBUzrUAVgb64SgqiGc77kIHRJ9v09lOBYA0SwsgXTL87wBs6xw+78OgA2ToEUBaj1C6L5mehZIo5YdsX4VUm0ejykYnvLAAV1NjfKeddbUQZmeSRmB4jFUtJjQxDsb8quKVDzsYWkLsP7xxD5ISQOv5cbg5ZVElBoP09ZVbO3veLvo6O51++lonA5CLOAcbUNoNh6VXPtYD2HfvpN95Pii9yqbu1AEqGvrwl9Wp2qmVwQE4Sg5Ii8rcRrslweWmEco3S2V1KgC0jD7UQ+siUtuvVYRl4T79dnweW1WO0O0pWKeXUN3UnxggoVFFa2dGaOoWbt1x48jx/i31AxWNfRizutSbRWom037NzVIBkLDaGY2wrineli9/oRnWJ+3IckwWtHdawfHJj6v/xytwsP7kaTQ0PgbG/Ep8Ae4z7yDMsvRiHdC4WFvtiQsqNRLGo0dw1h9bTRj1x7QBojwPT3sbDRv5MVNqQnBkGLNzPBpahhIuYKsAxtioPTmIuzPK/6mIAtevwb4vT+Mhi0bh+6EL9j250nHJyYL3s0sIeAO4+OU9+gdTKs7TAWAsttDj2fHRFHz+sAIi6vWCO9+uBnDWVK/m4ebjiNgeY2iUQWnt9ZSdphPAGBumo9fosV0vFQBx4ijcS1s7m92Pt87d3LSzpwFgjI2mMyOY/2dZG0CXLl26dOnSZXj2+hdh4D9R4Q/X/wAAAABJRU5ErkJggg==" alt="ENGLISH"></img>
                        <label class="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" class="sr-only peer" onChange={ChangeLanguage} checked></input>
                          <div class="w-11 h-6 bg-teal-700 outline-none ring-4 ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-teal-600"></div>
                        </label>
                        <img class="ml-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeElEQVR4nO2YuRHAQAgDlbkZ+s8pRLXI6Y0bwNi7M+QIBPdIAAAAX8ClbAohoOhAsNDJtCXMENfyNZq+simEgKYDwUIn05YIQ9zzVQ1rtOcrGw6y3hF6Mp1Qfi/AL7gim1+JWvyg8QuSMgJqvrLGQrV0iAEAALSQG87JQyXPr+IVAAAAAElFTkSuQmCC" alt="ESPAÑOL"></img>
                          </div>
                  </div>
                  
                </div>
              </div>


                {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 font-sans text-amber-400 font-extrabold">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <button className="block h-6 w-20" aria-hidden="true" >MENU ↑</button>
                  ) : (
                    <button className="block h-6 w-25" aria-hidden="true" >{currentActivePage.toUpperCase()} ↓</button>
                  )}
                </Disclosure.Button>
              </div>




            </div>
          </div>

                {/* MENU DESPLEGABLE CELU */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 flex-col">
              {navigation.map((item) => (
                <div>
                 <Link onClick={() => handleClickLink()} to={`/${item.href}`} key={item.href}>
                 <button key={item.href}
                     className={classNames(
                         item.href === currentActivePage ? 'font-sans text-amber-400 font-black' : ' font-sans font-extrabold text-gray-300 hover:bg-amber hover:text-white',
                         'px-3 py-2 rounded-full text-sm font-medium'
                       )}>
                              {item.name}
                 </button>
             </Link>
             </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}