import { IoMdTime } from "react-icons/io";
import { FiBook } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

const TrendCard = ({ course }) => {
    return (
        <div className="bg-white rounded-lg border overflow-hidden space-y-3 group">
            <img src={course.image} alt={course.title} className="w-full h-72 " />
            <div className="p-4 space-y-3">
                <div className="flex gap-4 items-center">
                    <p className="bg-[#E6F0F9] text-xs font-semibold p-1 px-2 text-center rounded-md text-[#066AC9]">{course.category}</p>
                    <p className="bg-[#24292D] text-white p-1 text-xs font-semibold rounded-md px-2 ">{course.level}</p>
                    <CiBookmark className="ml-auto text-2xl text-gray-600 hover:text-[#066AC9] cursor-pointer" />
                </div>
                <h2 className="text-2xl text-[#24292D] hover:text-[#066AC9] hover:cursor-pointer font-bold">{course.title}</h2>
                <div className="mt-2 flex justify-between">
                    <span className="text-yellow-500">⭐ {course.rating}</span>
                    <span className="ml-4">{course.studentNumber}<span className="text-sm text-[#8C8B8B]"> ( Students )</span></span>
                </div>
                <div className="mt-2 flex gap-7">
                    <div className="flex gap-2 items-center">
                        <IoMdTime className="text-xl text-[#D83246]" />
                        <span className="text-[#24292D]">{course.duration}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FiBook className="text-xl text-[#FD7E14]" />
                        <span className="">{course.lectures} lectures</span>
                    </div>
                </div>
                <div className="flex items-center justify-between border-t">
                    <div className="flex gap-3 space-y-3">
                        <img src={course.authorImage} alt={course.author} className="w-10 h-10 mt-2" />
                        <span>{course.author}</span>
                    </div>

                    <div className="mt-4">
                        <span className="hidden group-hover:block">
                            <button className="px-3 py-2 text-[#0CBC87] hover:text-white font-bold text-xs rounded bg-[#E6F8F3] hover:bg-[#0CBC87] duration-500 flex items-center gap-2">
                                <IoCart className="text-lg" /> Add to Cart
                            </button>
                        </span>
                        <span className="font-bold text-3xl text-[#0CBC87] group-hover:hidden">
                            {course.price === "Free" ? "Free" : `$${course.price}`}
                        </span>
                    </div>



                    {/* <div className="mt-4">
                        <span className="font-bold text-3xl text-[#0CBC87] hover:bg-[#0CBC87]">{course.price === "Free" ? "Free" : `$${course.price}`}</span>
                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default TrendCard;