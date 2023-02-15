import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'ABOUT ME', href: 'about'},
  { name: 'SKILLS', href: 'skills'},
  { name: 'PROJECTS', href: 'projects' },
  { name: 'CONTACT ME', href: 'contact'},
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
let currentActivePage = window.location.pathname.slice(1);

//const [isActive, setIsActive] = React.useState(currentActivePage || "")


const handleClickLink = () => {
    document.documentElement.scrollTop = 0
    //setIsActive(page);
  }

  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">


                {/* MENU PARA COMPU */}
                <div className="flex flex-1 items-center justify-center md:items-stretch ">
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-24">
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