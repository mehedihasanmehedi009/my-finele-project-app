 export const Navbar = () => {
    return (
        <>
            <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>

                <div className="collapse-title navbar max-w-[1120px] mx-auto px-4">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className=" cursor p-4 lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <button className=" text-xl font-extrabold">MY WebSite</button>
                    </div>

                   <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-medium">
                            <li><a className="text-black-500 text-1xl" href="#home">Home</a></li>
                            <li><a className="text-black-500 text-1xl" href="#about">About</a></li>
                            <li><a className="text-black-500 text-1xl" href="#service">Service</a></li>
                            <li><a className="text-black-500 text-1xl" href="#contact">Contact</a></li>
                        </ul>
                    </div>

                     <div className="navbar-end">
                        <input type="text" placeholder="Search" className="input input-bordered w-40 sm:w-64 lg:w-auto" />
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-10 max-w-[1120px] mx-auto ">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <a href="#home"    className="text-black-500 text-1xl">Home</a>
                        <a href="#about"   className="text-black-500 text-1xl">About</a>
                        <a href="#service" className="text-black-500 text-1xl">Service</a>
                        <a href="#contact" className="text-black-500 text-1xl">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}