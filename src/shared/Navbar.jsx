import { Link } from "react-router-dom";


const Navbar = () => {
    const navOptions = <>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/allClasses'>All Classes</Link></li>
        <li><Link to='/TeacherApply'>Teach On SkillShare</Link></li>
        {/* <li><Link to='/signIn'></Link></li> */}
    </>

    return (
        <div className="navbar bg-base-100 max-w-screen-xl m-auto relative">
            {/* <div className='absolute inset-0 blur-xl ' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div> */}
            <div className=""></div>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">EduNova</a> */}
                <button><img src="https://i.ibb.co.com/q3zhWkty/EduNova.png" width={150} className="mx-auto" /></button>
                {/* <img src="https://i.ibb.co.com/hRY2Q8H2/Edu-Nova-2.png" width={150} className="mx-auto" /> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <Link to='/signIn'><button className="btn  text-xl">Sign In</button></Link>
                <Link to='/signUp'><button className="btn  text-xl">Sign Up</button></Link>
            </div>
        </div>
    );
};

export default Navbar;