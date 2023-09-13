import { useState } from "react"
  

function HeaderMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    

    <div className="flex items-center justify-center  border-b-4 border-sky-700 py-8">
    
      <nav>
        {/* MOBILE_MENU */}
        <section className="flex lg:hidden ">
          <div
          //BURGUER ICON
            className="space-y-2 absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 animate-pulse bg-sky-700"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-sky-700"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-sky-700"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
            // CLOSE_ICON
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 animate-pulse text-sky-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            
            <ul className="flex flex-col items-center justify-center min-h-[250px]">
              <li className=" text-sky-700 my-8">
                <a href="/aboutme">About Me</a>
              </li>
              <li className="text-sky-700 my-8">
                <a href="/gallery">Gallery</a>
              </li>
              <li className="text-sky-700 my-8">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>
          {/* DESKTOP-MENU */}
        <ul className="hidden space-x-8 lg:flex max-w-[700px] text-sky-700  text-center  ">
          <li>
            <a href="/aboutme">About Me</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
     

   </nav>

    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}

export default HeaderMenu
