import { GrGroup } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";

const TeacherDescription = () => {
    return (
        <div className="mt-9 mb-9 max-w-7xl mx-auto">
            {/* <div className="mt-20 mb-24 bg-[url('https://gaviaspreview.com/wp/wellearn/wp-content/uploads/2024/08/bg-shape-1.png')] bg-left-top bg-no-repeat"> */}
            <div className="text-center">
                <h4 className="text-2xl md:text-4xl font-bold">You can be your guiding star with  our help </h4>
                <p className="px-1 mt-3 text-[#747579]">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant <br /> the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.</p>
            </div>
            <div className="grid md:grid-cols-3 mt-8 gap-8 p-16">
                <div className="place-items-center shadow-lg place-content-center space-y-5 p-8">
                    {/* <img className="w-48 h-48 mb-4 " src="https://themes.stackbros.in/eduport-next/assets/create-account-DdiUIHmn.svg" alt="" /> */}
                    <GrGroup className="text-6xl text-[#1AA3B9]" />
                    <div className="text-center space-y-2 px-5">
                        {/* <h4 className="text-2xl font-bold">Create Account</h4> */}
                        {/* <p className="text-[#747579] text-sm">Satisfied conveying a dependent contented he gentleman <br /> agreeable do be. Delivered dejection necessary objection...</p> */}
                        <h4 className="text-2xl font-semibold">Join Our Community</h4>
                        <p className="text-[#747579] text-sm">Take advantage of our active community of instructors to help you through your course creation process.</p>
                    </div>
                </div>

                <div className="place-items-center place-content-center shadow-lg">
                    {/* <img className="w-48 h-48 mb-4 " src="https://themes.stackbros.in/eduport-next/assets/add-course-BPvoVJlS.svg" alt="" /> */}
                    <GiTeacher className="text-6xl text-[#6F42C1]" />
                    <div className="text-center space-y-2 px-5">
                        <h4 className="text-2xl font-semibold">Start Teaching.</h4>
                        <p className="text-[#747579] text-sm">Let it be just right with smooth and easy management. Each solution is perfect in the way of managing dreams.</p>
                        {/* <h4 className="text-2xl font-bold">Add your Course</h4>
                            <p className="text-[#747579] text-sm">Proceed how any engaged visitor. Explained propriety off <br /> out perpetual his you. Feel sold off felt nay rose met you....</p> */}
                    </div>
                </div>


                <div className="place-items-center shadow-lg place-content-center ">
                    {/* <img className="w-48 h-48 mb-4 " src="https://themes.stackbros.in/eduport-next/assets/earn-money-Bk-KqHHs.svg" alt="" /> */}
                    <GiTakeMyMoney className="text-6xl text-[#F7C32E]" />
                    <div className="text-center space-y-2 px-5">
                        <h4 className="text-2xl font-bold">Start Earning Money</h4>
                        <p className="text-[#747579] text-sm">Let it not be right or wrong but manage challenges easily. Every solution is easier to create when maintaining management.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TeacherDescription;