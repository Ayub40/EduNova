import { useState } from "react";
import TrendCourses from "../TrendingCourses/TrendCourses";
import { CiSearch } from "react-icons/ci";


const AllClasses = () => {
    const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
    const [currentPage, setCurrentPage] = useState("1")

    return (
        <div className="mb-24">
            <div className="w-full px-2 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto relative ">
                <div>
                    <h3 className="block mb-4 text-xs md:text-lg text-[#2AB884] font-semibold mt-14">
                        All Classes
                    </h3>
                </div>
            </div>
            {/* select button */}
            <div className="md:w-[1280px] md:h-[100px] bg-[#F5F7F9] mx-auto border rounded-md ">
                <div className="flex gap-4 p-3">
                    {/* new select */}
                    <div className="relative w-72 max-w-full mx-auto mt-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                            <option>Project manager</option>
                            <option>Software engineer</option>
                            <option>IT manager</option>
                            <option>UI / UX designer</option>
                        </select>
                    </div>
                    <div className="relative w-72 max-w-full mx-auto mt-4 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                            <option>Category</option>
                            <option>Development</option>
                            <option>Marketing</option>
                            <option>Accounting</option>
                            <option>IT & Software</option>
                            <option>Designing</option>
                            <option>Medical</option>
                            <option>Photography</option>
                            <option>Lifestyle</option>
                        </select>
                    </div>
                    <div className="relative w-72 max-w-full mx-auto mt-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                            <option>Price Level</option>
                            <option>Software engineer</option>
                            <option>IT manager</option>
                            <option>UI / UX designer</option>
                        </select>
                    </div>

                    <div className="relative w-72 max-w-full mx-auto mt-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                            <option>Skill Level</option>
                            <option>Software engineer</option>
                            <option>IT manager</option>
                            <option>UI / UX designer</option>
                        </select>
                    </div>

                    <div className="relative w-72 max-w-full mx-auto mt-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 right-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <select className="w-full px-3 py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                            <option>Language</option>
                            <option>Software engineer</option>
                            <option>IT manager</option>
                            <option>UI / UX designer</option>
                        </select>
                    </div>

                    {/* new select end*/}

                    <CiSearch className="text-2xl  text-white bg-[#066AC9] border rounded-md h-9 w-20 p-1 mt-auto" />


                    {/* <div>
                        <select defaultValue="Pick a browser" className="select">
                            <option disabled={true}>Pick a browser</option>
                            <option>Chrome</option>
                            <option>FireFox</option>
                            <option>Safari</option>
                        </select>
                    </div>
                    <div>
                        <select defaultValue="Pick a browser" className="select">
                            <option disabled={true}>Pick a browser</option>
                            <option>Chrome</option>
                            <option>FireFox</option>
                            <option>Safari</option>
                        </select>
                    </div>
                    <div>
                        <select defaultValue="Pick a browser" className="select">
                            <option disabled={true}>Pick a browser</option>
                            <option>Chrome</option>
                            <option>FireFox</option>
                            <option>Safari</option>
                        </select>
                    </div>
                    <div>
                        <select defaultValue="Pick a browser" className="select">
                            <option disabled={true}>Pick a browser</option>
                            <option>Chrome</option>
                            <option>FireFox</option>
                            <option>Safari</option>
                        </select>
                    </div>
                    <div>
                        <select defaultValue="Pick a browser" className="select">
                            <option disabled={true}>Pick a browser</option>
                            <option>Chrome</option>
                            <option>FireFox</option>
                            <option>Safari</option>
                        </select>
                    </div> */}
                </div>
            </div>
            <div className="flex mt-5 mx-auto max-w-7xl">
                {/* <div className="w-1/4 border">
                    fdas
                </div> */}
                {/* <div className="w-3/4"> */}
                <div className="">
                    <TrendCourses></TrendCourses>
                </div>
            </div>

            {/*............................................... Pagination........................................................... */}

            <div className="max-w-screen-xl mx-auto mt-16 px-4 text-gray-600 md:px-8">
                <div className="hidden justify-center sm:flex" aria-label="Pagination">
                    <ul className="flex items-center">
                        <li>
                            <a href="javascript:void(0)" className="px-3 h-11 flex hover:text-indigo-600 hover:bg-gray-50 border border-r-0 rounded-tl-lg rounded-bl-lg">
                                <span className="inline-flex items-center gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                    </svg>
                                    Previous
                                </span>
                            </a>
                        </li>
                        {
                            pages.map((item, idx) => (
                                <li key={item} className="">
                                    {
                                        item == "..." ? (
                                            <span className="px-4 py-3 border border-l-0">
                                                {item}
                                            </span>
                                        ) : (

                                            <a href="javascript:void(0)" aria-current={currentPage == item ? "page" : false} className={`h-10 px-4 py-3 border border-l-0 duration-150 hover:text-indigo-600 hover:bg-indigo-50 ${currentPage == item ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`}>
                                                {item}
                                            </a>
                                        )
                                    }
                                </li>
                            ))
                        }
                        <li>
                            <a href="javascript:void(0)" className="px-3 h-11 flex hover:text-indigo-600 hover:bg-gray-50 border border-l-0 rounded-tr-lg rounded-br-lg">
                                <span className="inline-flex items-center gap-x-2">
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* On mobile version */}
                <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
                    <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Previous</a>
                    <div className="font-medium">
                        Page {currentPage} of {pages.length}
                    </div>
                    <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Next</a>
                </div>
            </div>


        </div>
    );
};

export default AllClasses;