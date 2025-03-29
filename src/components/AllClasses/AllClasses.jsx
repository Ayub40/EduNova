import TrendCourses from "../TrendingCourses/TrendCourses";


const AllClasses = () => {
    return (
        <div>
            <div className="w-full px-2 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto relative ">
                <div>
                    <h3 className="block mb-4 text-xs md:text-lg text-[#2AB884] font-semibold mt-14">
                        All Classes
                    </h3>
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
        </div>
    );
};

export default AllClasses;