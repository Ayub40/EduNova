import { HiMiniComputerDesktop } from "react-icons/hi2";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentDuotone } from "react-icons/pi";
import { BsPatchCheck } from "react-icons/bs";

const Total = () => {
    return (

        <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800  max-w-7xl mx-auto mt-14">
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#FEF6E0]">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                        <HiMiniComputerDesktop className="h-14 w-14 text-[#F7C32E]" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-xl font-bold leading-none">10K</p>
                        <p className="capitalize text-sm font-semibold">Online Courses</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#DDE2E5]">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                        <LiaChalkboardTeacherSolid className="h-14 w-14 text-[#1D3B53]" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-xl font-bold leading-none">200+</p>
                        <p className="capitalize text-sm font-semibold">Expert Tutors</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#EAE3F6]">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                        <PiStudentDuotone className="h-14 w-14 text-[#6F42C1]" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-xl font-bold leading-none">60K+</p>
                        <p className="capitalize text-sm font-semibold">Online Students</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#DCF1F4]">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">                
                        <BsPatchCheck className="h-14 w-14 text-[#17A2B8]" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-xl font-bold leading-none">6K+</p>
                        <p className="capitalize text-sm font-semibold">Certified Courses</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Total;