/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard ";
import coursesData from "../../../public/courses.json";

const tabs = ["All", "Web Design", "Development", "Graphic Design", "Marketing", "Finance"];

const PopularCourses = () => {
    const [selected, setSelected] = useState(tabs[0]);  //This is for tab button ( copy from hover.com )
    const [filteredCourses, setFilteredCourses] = useState([]);

    // Filter courses based on selected category
    useEffect(() => {
        if (selected === "All") {
            setFilteredCourses(coursesData);
        } else {
            const filtered = coursesData.filter(
                (course) => course.category === selected
            );
            setFilteredCourses(filtered);
        }
    }, [selected]);

    return (
        <div className="mt-24 mb-24 space-y-5 max-w-7xl mx-auto">
            <div className="space-y-3">
                {/* <h3 className="text-4xl font-bold text-center"><span className="text-[#066AC9]">Most</span> <span className="text-[#6F42C1]">Popular</span> <span className="text-[#33d37e] text-4xl font-bold">Courses</span></h3> */}
                <h3 className="text-center text-4xl font-bold">Most Popular Courses</h3>
                <p className="text-center text-lg text-[#8C8B8B]">Choose from hundreds of courses from specialist organizations</p>
            </div>
            <div className="px-4 py-4 bg-[#E6F0F9] flex items-center flex-wrap gap-2 justify-center">
                {tabs.map((tab) => (
                    <Chip
                        text={tab}
                        selected={selected === tab}
                        setSelected={setSelected}
                        key={tab}
                    />
                ))}
            </div>

            {/* Courses List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

        </div>

    );
};

const Chip = ({
    text,
    selected,
    setSelected,
}) => {
    return (
        <button
            onClick={() => setSelected(text)}
            className={`${selected
                ? "text-white"
                : "text-[#066AC9] hover:text-white hover:bg-[#066AC9]"
                } text-sm transition-colors rounded-md relative py-3 px-6`}
        >
            <span className="relative z-10">{text}</span>
            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.8 }}
                    className="absolute inset-0 z-0 bg-[#066AC9] rounded-md"
                ></motion.span>
            )}
        </button>
    );
};

export default PopularCourses;