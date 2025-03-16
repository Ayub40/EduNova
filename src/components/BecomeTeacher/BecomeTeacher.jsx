import { Link } from "react-router-dom";


const BecomeTeacher = () => {
    return (
        <div className="relative max-w-7xl h-48 rounded-lg bg-gradient-to-r from-[#17A2B8] via-[#2FABBF] to-[#17A2B8] md:mt-24 md:mb-16 md:flex overflow-hidden mx-auto">
            <div className="absolute top-6 left-8 w-36 h-36 bg-[#2FABBF] rounded-full z-0"></div>
            {/* <div className="absolute bottom-14 right-16 w-7 h-7 bg-[#74C7D4] rounded-full z-0"></div> */}
            <div className="relative md:w-2/3 md:space-y-2 content-center ">
                <div className="absolute top-5 right-56 w-7 h-7 bg-[#74C7D4] rounded-full z-0"></div>
                <div className="absolute bottom-14 right-16 w-6 h-6 bg-[#74C7D4] rounded-full z-0"></div>
                <h1 className="md:text-3xl font-bold text-white md:mx-16 md:mt-9">Become an Instructor!</h1>
                <p className="text-[#FAFDFD] md:mx-16 relative">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>


            </div>

            <div>
                <Link to='/TeacherApply'>
                    <button className="border btn btn-wide text-[#F7C32E] hover:text-black bg-[#17A2B8] hover:bg-[#F7C32E] border-[#F7C32E] md:mx-36 md:mt-16">
                        Start Teaching Today
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default BecomeTeacher;


// <img src="https://themes.stackbros.in/eduport-next/assets/07-CK3ZrEuH.png" alt="" />