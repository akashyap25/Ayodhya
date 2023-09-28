import React,{useState} from "react";
import menu from '../Assets/icon-hamburger.svg';
import closeIcon from '../Assets/icon-close.svg';
import logo from '../Assets/logo-bookmark.svg'

const Header = () => {
    
    const [hamburger, setHamburger] = useState(false);
    

    return (
        <header className=" flex w-full p-8 items-center justify-center lg:items-center lg:justify-start">
            <div>
                <img src={logo} alt="" className="lg:mr-8" />
            </div>

            {/* <div
          className={`${
            hamburger
              ? "bg-black bg-opacity-75 absolute top-0 left-0 right-0 bottom-0 h-screen"
              : "bg-transparent lg:bg-transparent"
          } lg:bg-transparent lg:h-auto lg:relative `}
        >
            <nav
            className={`${hamburger ? "open w-full py-8 lg:py-0 lg:w-auto" : ""}`}
          >
                <ul className="flex items-center justify-center flex-wrap gap-4 text-xl">
                    <li>
                        <button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white '>
                          home
                        </button>
                    </li>
                    <li>
                        <button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white '>
                            shop
                        </button>
                    </li><li>
                        <button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white '>
                            about
                        </button>
                    </li><li>
                        <button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200 lg:text-white lg:hover:border-b-white '>
                            contact
                        </button>
                    </li>
                </ul>
            </nav>
            </div> */}

            {/* <div className="absolute left-8 top-8 lg:hidden">
                {hamburger ?
                 <button onClick={()=>{setHamburger(false)}}>
                    <img src={closeIcon} alt=""/>
                </button>:
                <button onClick={()=>{setHamburger(true)}}>
                    <img src={menu} alt="" />
                </button>}
            </div> */}
        </header>
    )
}

export default Header;