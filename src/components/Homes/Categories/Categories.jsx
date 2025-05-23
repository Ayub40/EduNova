// import { HiMiniComputerDesktop } from "react-icons/hi2";
// import { LiaChalkboardTeacherSolid } from "react-icons/lia";
// import { PiStudentDuotone } from "react-icons/pi";
// import { BsPatchCheck } from "react-icons/bs";
import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";
import { fadeIn } from "../../../variants";

const Categories = () => {
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800 max-w-7xl mx-auto">
            <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                // viewport={{ once: false, amount: 0.7 }}

                className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                {/* 1. Development */}
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#E6F8F3] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        {/* <HiMiniComputerDesktop className="h-14 w-14 text-[#F7C32E]" /> */}
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/content.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Development</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
                {/* 2. Marketing */}
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#FFF2E7] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        {/* <HiMiniComputerDesktop className="h-14 w-14 text-[#F7C32E]" /> */}
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/05/briefcase.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Marketing</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
                {/* 3. Accounting */}
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#E6F0F9] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        {/* <HiMiniComputerDesktop className="h-14 w-14 text-[#F7C32E]" /> */}
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/career.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Accounting</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
                {/* 4. IT & Software */}
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#F0ECF9] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        {/* <HiMiniComputerDesktop className="h-14 w-14 text-[#F7C32E]" /> */}
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/05/python.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">IT & Software</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
                {/* 5. Designing */}
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#FBE9EB] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        {/* <HiMiniComputerDesktop className="h-14 w-14 text-[#F7C32E]" /> */}
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/05/designer.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Designing</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
                {/* 6. Medical */}
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#E8EBED] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        {/* <HiMiniComputerDesktop className="h-14 w-14 text-[#F7C32E]" /> */}
                        <img className="h-10 w-10 m-auto" src="https://themes.stackbros.in/eduport-next/assets/medical-vUj0MoJW.svg" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Medical</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
                {/* 7. Photography */}
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#FEF9EA] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        {/* <HiMiniComputerDesktop className="h-14 w-14 text-[#F7C32E]" /> */}
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/05/photo.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Photography</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
                {/* 8. Lifestyle */}
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#E9F6EF] hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        {/* <HiMiniComputerDesktop className="h-14 w-14 text-[#F7C32E]" /> */}
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/05/health.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Lifestyle</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>



                {/* <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#E6F8F3]">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/content.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Development</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
              
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#E6F8F3]">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                       <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/content.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Development</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
                
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#E6F8F3]">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/content.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Development</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div>
            
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800 bg-[#E6F8F3]">
                    <div className="flex justify-center p-2 align-middle rounded-full sm:p-4 dark:bg-violet-600 bg-white h-20 w-20">
                        <img className="h-10 w-10 m-auto" src="https://demoapus1.com/skillup/wp-content/uploads/2022/04/content.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle space-y-1">
                        <p className="text-xl font-bold leading-none">Development</p>
                        <p className="capitalize">3 Courses</p>
                    </div>
                </div> */}
            </motion.div>
        </section>
    );
};

export default Categories;