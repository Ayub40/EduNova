import { useEffect, useState } from "react";
import ApplyForm from "../../components/BecomeTeacher/ApplyForm";
import State from "../../components/BecomeTeacher/State";
import TeacherApply from "../../components/BecomeTeacher/TeacherApply";
import TeacherDescription from "../../components/BecomeTeacher/TeacherDescription";
import { FaArrowUp } from "react-icons/fa";


const BecomeInstructors = () => {
    const [showArrow, setShowArrow] = useState(false);

    // Show arrow when scrolling past the banner section
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Adjust the value based on your banner height
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <div className="relative">
            <div>
                <TeacherApply></TeacherApply>
                <TeacherDescription></TeacherDescription>
                <State></State>
                {/* <SignupFormDemo></SignupFormDemo> */}
                <ApplyForm></ApplyForm>
            </div>
            {showArrow && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-9 p-3 bg-[#24A7BC] text-white rounded-full shadow-lg cursor-pointer hover:bg-[#0CBC87] transition"
                >
                    <FaArrowUp size={20} />
                </div>
            )}
        </div>
    );
};

export default BecomeInstructors;