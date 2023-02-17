import React from "react";
import NavBar from "./NavBar"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ContactMe() {

    const english = useSelector ((state) => state.english);

  useEffect(() => {
            
  },[english]);

    let contact=[
        {name:"Gmail", logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBmaWxsPSIjNGNhZjUwIiBkPSJNNDUsMTYuMmwtNSwyLjc1bC01LDQuNzVMMzUsNDBoN2MxLjY1NywwLDMtMS4zNDMsMy0zVjE2LjJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFlODhlNSIgZD0iTTMsMTYuMmwzLjYxNCwxLjcxTDEzLDIzLjdWNDBINmMtMS42NTcsMC0zLTEuMzQzLTMtM1YxNi4yeiI+PC9wYXRoPjxwb2x5Z29uIGZpbGw9IiNlNTM5MzUiIHBvaW50cz0iMzUsMTEuMiAyNCwxOS40NSAxMywxMS4yIDEyLDE3IDEzLDIzLjcgMjQsMzEuOTUgMzUsMjMuNyAzNiwxNyI+PC9wb2x5Z29uPjxwYXRoIGZpbGw9IiNjNjI4MjgiIGQ9Ik0zLDEyLjI5OFYxNi4ybDEwLDcuNVYxMS4yTDkuODc2LDguODU5QzkuMTMyLDguMzAxLDguMjI4LDgsNy4yOTgsOGgwQzQuOTI0LDgsMyw5LjkyNCwzLDEyLjI5OHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmJjMDJkIiBkPSJNNDUsMTIuMjk4VjE2LjJsLTEwLDcuNVYxMS4ybDMuMTI0LTIuMzQxQzM4Ljg2OCw4LjMwMSwzOS43NzIsOCw0MC43MDIsOGgwIEM0My4wNzYsOCw0NSw5LjkyNCw0NSwxMi4yOTh6Ij48L3BhdGg+Cjwvc3ZnPg==", href:"mailto:virginia.juarez1996@gmail.com" },
        {name:"WhatsApp", logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBmaWxsPSIjZmZmIiBkPSJNNC44NjgsNDMuMzAzbDIuNjk0LTkuODM1QzUuOSwzMC41OSw1LjAyNiwyNy4zMjQsNS4wMjcsMjMuOTc5QzUuMDMyLDEzLjUxNCwxMy41NDgsNSwyNC4wMTQsNWM1LjA3OSwwLjAwMiw5Ljg0NSwxLjk3OSwxMy40Myw1LjU2NmMzLjU4NCwzLjU4OCw1LjU1OCw4LjM1Niw1LjU1NiwxMy40MjhjLTAuMDA0LDEwLjQ2NS04LjUyMiwxOC45OC0xOC45ODYsMTguOThjLTAuMDAxLDAsMCwwLDAsMGgtMC4wMDhjLTMuMTc3LTAuMDAxLTYuMy0wLjc5OC05LjA3My0yLjMxMUw0Ljg2OCw0My4zMDN6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQuODY4LDQzLjgwM2MtMC4xMzIsMC0wLjI2LTAuMDUyLTAuMzU1LTAuMTQ4Yy0wLjEyNS0wLjEyNy0wLjE3NC0wLjMxMi0wLjEyNy0wLjQ4M2wyLjYzOS05LjYzNmMtMS42MzYtMi45MDYtMi40OTktNi4yMDYtMi40OTctOS41NTZDNC41MzIsMTMuMjM4LDEzLjI3Myw0LjUsMjQuMDE0LDQuNWM1LjIxLDAuMDAyLDEwLjEwNSwyLjAzMSwxMy43ODQsNS43MTNjMy42NzksMy42ODMsNS43MDQsOC41NzcsNS43MDIsMTMuNzgxYy0wLjAwNCwxMC43NDEtOC43NDYsMTkuNDgtMTkuNDg2LDE5LjQ4Yy0zLjE4OS0wLjAwMS02LjM0NC0wLjc4OC05LjE0NC0yLjI3N2wtOS44NzUsMi41ODlDNC45NTMsNDMuNzk4LDQuOTExLDQzLjgwMyw0Ljg2OCw0My44MDN6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2NmZDhkYyIgZD0iTTI0LjAxNCw1YzUuMDc5LDAuMDAyLDkuODQ1LDEuOTc5LDEzLjQzLDUuNTY2YzMuNTg0LDMuNTg4LDUuNTU4LDguMzU2LDUuNTU2LDEzLjQyOGMtMC4wMDQsMTAuNDY1LTguNTIyLDE4Ljk4LTE4Ljk4NiwxOC45OGgtMC4wMDhjLTMuMTc3LTAuMDAxLTYuMy0wLjc5OC05LjA3My0yLjMxMUw0Ljg2OCw0My4zMDNsMi42OTQtOS44MzVDNS45LDMwLjU5LDUuMDI2LDI3LjMyNCw1LjAyNywyMy45NzlDNS4wMzIsMTMuNTE0LDEzLjU0OCw1LDI0LjAxNCw1IE0yNC4wMTQsNDIuOTc0QzI0LjAxNCw0Mi45NzQsMjQuMDE0LDQyLjk3NCwyNC4wMTQsNDIuOTc0QzI0LjAxNCw0Mi45NzQsMjQuMDE0LDQyLjk3NCwyNC4wMTQsNDIuOTc0IE0yNC4wMTQsNDIuOTc0QzI0LjAxNCw0Mi45NzQsMjQuMDE0LDQyLjk3NCwyNC4wMTQsNDIuOTc0QzI0LjAxNCw0Mi45NzQsMjQuMDE0LDQyLjk3NCwyNC4wMTQsNDIuOTc0IE0yNC4wMTQsNEMyNC4wMTQsNCwyNC4wMTQsNCwyNC4wMTQsNEMxMi45OTgsNCw0LjAzMiwxMi45NjIsNC4wMjcsMjMuOTc5Yy0wLjAwMSwzLjM2NywwLjg0OSw2LjY4NSwyLjQ2MSw5LjYyMmwtMi41ODUsOS40MzljLTAuMDk0LDAuMzQ1LDAuMDAyLDAuNzEzLDAuMjU0LDAuOTY3YzAuMTksMC4xOTIsMC40NDcsMC4yOTcsMC43MTEsMC4yOTdjMC4wODUsMCwwLjE3LTAuMDExLDAuMjU0LTAuMDMzbDkuNjg3LTIuNTRjMi44MjgsMS40NjgsNS45OTgsMi4yNDMsOS4xOTcsMi4yNDRjMTEuMDI0LDAsMTkuOTktOC45NjMsMTkuOTk1LTE5Ljk4YzAuMDAyLTUuMzM5LTIuMDc1LTEwLjM1OS01Ljg0OC0xNC4xMzVDMzQuMzc4LDYuMDgzLDI5LjM1Nyw0LjAwMiwyNC4wMTQsNEwyNC4wMTQsNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNDBjMzUxIiBkPSJNMzUuMTc2LDEyLjgzMmMtMi45OC0yLjk4Mi02Ljk0MS00LjYyNS0xMS4xNTctNC42MjZjLTguNzA0LDAtMTUuNzgzLDcuMDc2LTE1Ljc4NywxNS43NzRjLTAuMDAxLDIuOTgxLDAuODMzLDUuODgzLDIuNDEzLDguMzk2bDAuMzc2LDAuNTk3bC0xLjU5NSw1LjgyMWw1Ljk3My0xLjU2NmwwLjU3NywwLjM0MmMyLjQyMiwxLjQzOCw1LjIsMi4xOTgsOC4wMzIsMi4xOTloMC4wMDZjOC42OTgsMCwxNS43NzctNy4wNzcsMTUuNzgtMTUuNzc2QzM5Ljc5NSwxOS43NzgsMzguMTU2LDE1LjgxNCwzNS4xNzYsMTIuODMyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjI2OCwxNi4wNDVjLTAuMzU1LTAuNzktMC43MjktMC44MDYtMS4wNjgtMC44MmMtMC4yNzctMC4wMTItMC41OTMtMC4wMTEtMC45MDktMC4wMTFjLTAuMzE2LDAtMC44MywwLjExOS0xLjI2NSwwLjU5NGMtMC40MzUsMC40NzUtMS42NjEsMS42MjItMS42NjEsMy45NTZjMCwyLjMzNCwxLjcsNC41OSwxLjkzNyw0LjkwNmMwLjIzNywwLjMxNiwzLjI4Miw1LjI1OSw4LjEwNCw3LjE2MWM0LjAwNywxLjU4LDQuODIzLDEuMjY2LDUuNjkzLDEuMTg3YzAuODctMC4wNzksMi44MDctMS4xNDcsMy4yMDItMi4yNTVjMC4zOTUtMS4xMDgsMC4zOTUtMi4wNTcsMC4yNzctMi4yNTVjLTAuMTE5LTAuMTk4LTAuNDM1LTAuMzE2LTAuOTA5LTAuNTU0cy0yLjgwNy0xLjM4NS0zLjI0Mi0xLjU0M2MtMC40MzUtMC4xNTgtMC43NTEtMC4yMzctMS4wNjgsMC4yMzhjLTAuMzE2LDAuNDc0LTEuMjI1LDEuNTQzLTEuNTAyLDEuODU5Yy0wLjI3NywwLjMxNy0wLjU1NCwwLjM1Ny0xLjAyOCwwLjExOWMtMC40NzQtMC4yMzgtMi4wMDItMC43MzgtMy44MTUtMi4zNTRjLTEuNDEtMS4yNTctMi4zNjItMi44MS0yLjYzOS0zLjI4NWMtMC4yNzctMC40NzQtMC4wMy0wLjczMSwwLjIwOC0wLjk2OGMwLjIxMy0wLjIxMywwLjQ3NC0wLjU1NCwwLjcxMi0wLjgzMWMwLjIzNy0wLjI3NywwLjMxNi0wLjQ3NSwwLjQ3NC0wLjc5MWMwLjE1OC0wLjMxNywwLjA3OS0wLjU5NC0wLjA0LTAuODMxQzIwLjYxMiwxOS4zMjksMTkuNjksMTYuOTgzLDE5LjI2OCwxNi4wNDV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD4KPC9zdmc+", href:"https://walink.co/855b8f" },
        {name:"LinkedIn", logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBmaWxsPSIjMDI4OGQxIiBkPSJNMjQsNEMxMyw0LDQsMTMsNCwyNHM5LDIwLDIwLDIwczIwLTksMjAtMjBTMzUsNCwyNCw0eiI+PC9wYXRoPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjE1IiB4PSIxNCIgeT0iMTkiIGZpbGw9IiNmZmYiPjwvcmVjdD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYsMTdMMTYsMTdjLTEuMiwwLTItMC45LTItMmMwLTEuMSwwLjgtMiwyLTJjMS4yLDAsMiwwLjksMiwyQzE4LDE2LjEsMTcuMiwxNywxNiwxN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzUsMjQuNWMwLTMtMi41LTUuNS01LjUtNS41Yy0xLjksMC0zLjUsMC45LTQuNSwyLjNWMTloLTR2MTVoNHYtOGMwLTEuNywxLjMtMywzLTNzMywxLjMsMywzdjhoNAlDMzUsMzQsMzUsMjQuOSwzNSwyNC41eiI+PC9wYXRoPgo8L3N2Zz4=", href:"https://www.linkedin.com/in/maria-virginia-juarez/" },
        {name:"GitHub", logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9ImZpbGw6IzAwMDAwMDsiPgo8cGF0aCBkPSJNMzIgNkMxNy42NDEgNiA2IDE3LjY0MSA2IDMyYzAgMTIuMjc3IDguNTEyIDIyLjU2IDE5Ljk1NSAyNS4yODYtLjU5Mi0uMTQxLTEuMTc5LS4yOTktMS43NTUtLjQ3OVY1MC44NWMwIDAtLjk3NS4zMjUtMi4yNzUuMzI1LTMuNjM3IDAtNS4xNDgtMy4yNDUtNS41MjUtNC44NzUtLjIyOS0uOTkzLS44MjctMS45MzQtMS40NjktMi41MDktLjc2Ny0uNjg0LTEuMTI2LS42ODYtMS4xMzEtLjkyLS4wMS0uNDkxLjY1OC0uNDcxLjk3NS0uNDcxIDEuNjI1IDAgMi44NTcgMS43MjkgMy40MjkgMi42MjMgMS40MTcgMi4yMDcgMi45MzggMi41NzcgMy43MjEgMi41NzcuOTc1IDAgMS44MTctLjE0NiAyLjM5Ny0uNDI2LjI2OC0xLjg4OCAxLjEwOC0zLjU3IDIuNDc4LTQuNzc0LTYuMDk3LTEuMjE5LTEwLjQtNC43MTYtMTAuNC0xMC40IDAtMi45MjggMS4xNzUtNS42MTkgMy4xMzMtNy43OTJDMTkuMzMzIDIzLjY0MSAxOSAyMi40OTQgMTkgMjAuNjI1YzAtMS4yMzUuMDg2LTIuNzUxLjY1LTQuMjI1IDAgMCAzLjcwOC4wMjYgNy4yMDUgMy4zMzhDMjguNDY5IDE5LjI2OCAzMC4xOTYgMTkgMzIgMTlzMy41MzEuMjY4IDUuMTQ1LjczOGMzLjQ5Ny0zLjMxMiA3LjIwNS0zLjMzOCA3LjIwNS0zLjMzOC41NjcgMS40NzQuNjUgMi45OS42NSA0LjIyNSAwIDIuMDE1LS4yNjggMy4xOS0uNDMyIDMuNjk3QzQ2LjQ2NiAyNi40NzUgNDcuNiAyOS4xMjQgNDcuNiAzMmMwIDUuNjg0LTQuMzAzIDkuMTgxLTEwLjQgMTAuNCAxLjYyOCAxLjQzIDIuNiAzLjUxMyAyLjYgNS44NXY4LjU1N2MtLjU3Ni4xODEtMS4xNjIuMzM4LTEuNzU1LjQ3OUM0OS40ODggNTQuNTYgNTggNDQuMjc3IDU4IDMyIDU4IDE3LjY0MSA0Ni4zNTkgNiAzMiA2ek0zMy44MTMgNTcuOTNDMzMuMjE0IDU3Ljk3MiAzMi42MSA1OCAzMiA1OCAzMi42MSA1OCAzMy4yMTMgNTcuOTcxIDMzLjgxMyA1Ny45M3pNMzcuNzg2IDU3LjM0NmMtMS4xNjQuMjY1LTIuMzU3LjQ1MS0zLjU3NS41NTRDMzUuNDI5IDU3Ljc5NyAzNi42MjIgNTcuNjEgMzcuNzg2IDU3LjM0NnpNMzIgNThjLS42MSAwLTEuMjE0LS4wMjgtMS44MTMtLjA3QzMwLjc4NyA1Ny45NzEgMzEuMzkgNTggMzIgNTh6TTI5Ljc4OCA1Ny45Yy0xLjIxNy0uMTAzLTIuNDExLS4yODktMy41NzQtLjU1NEMyNy4zNzggNTcuNjEgMjguNTcxIDU3Ljc5NyAyOS43ODggNTcuOXoiPjwvcGF0aD4KPC9zdmc+", href:"https://github.com/VirJuarez" },
    ]
    
    return english?(
    <div class="bg-[url('/public/bg-portfolio.png')] lg:h-screen h-full w-full bg-cover bg-center">
         <div className="flex justify-end xl:justify-start ">
      <img src="/VJ_logo2.svg" alt="img" className="xl:w-40 fixed xl:mt-5 xl:ml-5 w-10 mr-3 xl:mr-0 mt-3"/> 
    </div>
        
        <NavBar />
        
                <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-48 py-5 md:py-15  my-1 lg:my-0  grid content-center place-content-center">
                    
                    
                      
                    <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 gap-x-20 lg:gap-x-40  ">
                        {contact.map(c=>
                        <div key={c.name} >
                        <a href={c.href} className="grid content-center place-content-center hover:animate-waving-hand">
                          <img src={c.logo} alt={c.name} className="h-16"/>
                        </a>
                        </div>)}
                    </div>

                    

                    <div className="w-64 py-10 mx-auto lg:w-[500px] grid content-center place-content-center">
                     <h6 className="text-center py-5 text-white font-sans font-bold">If you like my portfolio, please, interact with my post on LinkedIn to make it more visible. Thanks!</h6>
                     <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7031311750243201024"  frameborder="0" allowfullscreen="" title="Embedded post" className="w-64 lg:w-[500px] h-80 grid content-center place-content-center"></iframe>
                    </div>



                  

                </div> 
           
       
    </div>):
    (
        <div class="bg-[url('/public/bg-portfolio.png')] lg:h-screen h-full w-full bg-cover bg-center">
             <div className="flex justify-end xl:justify-start ">
      <img src="/VJ_logo2.svg" alt="img" className="xl:w-40 fixed xl:mt-5 xl:ml-5 w-10 mr-3 xl:mr-0 mt-3"/> 
    </div>
            <NavBar />
            
                    <div className=" border-teal-300 border-solid border-2 backdrop-blur px-6 lg:px-8 mx-4 md:mx-48 py-5 md:py-15  my-1 lg:my-0  grid content-center place-content-center">
                        
                        
                          
                        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 gap-x-20 lg:gap-x-40  ">
                            {contact.map(c=>
                            <div key={c.name} >
                            <a href={c.href} className="grid content-center place-content-center hover:animate-waving-hand">
                              <img src={c.logo} alt={c.name} className="h-16"/>
                            </a>
                            </div>)}
                        </div>
    
                        
    
                        <div className="w-64 py-10 mx-auto lg:w-[500px] grid content-center place-content-center">
                         <h6 className="text-center py-5 text-white font-sans font-bold">Si te gusta mi portafolio, ayudame interactuando con mi posteo en LinkedIn para darle más visibilidad. Gracias!</h6>
                         <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7031311750243201024"  frameborder="0" allowfullscreen="" title="Embedded post" className="w-64 lg:w-[500px] h-80 grid content-center place-content-center"></iframe>
                        </div>
    
    
    
                      
    
                    </div> 
               
           
        </div>)
}
