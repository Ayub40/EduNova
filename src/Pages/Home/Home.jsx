import { useEffect, useState } from "react";
import BecomeTeacher from "../../components/BecomeTeacher/BecomeTeacher";
import Footer from "../../components/Footer/Footer";
import { GridBackgroundDemo } from "../../components/GridBackgroundDemo";
import Banner from "../../components/Homes/Banner";
// import Categories from "../../components/Homes/Categories/Categories";
import PopularCourses from "../../components/Homes/PopularCourses";
import Total from "../../components/Homes/Total";
import TrendingCourses from "../TrendingCourses/TrendingCourses";
import AboutUs from "./AboutUs";
import Category from "./Category";
// import Homes from "../../components/Homes/Homes";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
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
                <Banner></Banner>
                {/* <Homes></Homes> */}
                <Total></Total>
                {/* <Categories></Categories> */}
                <Category></Category>
                <PopularCourses></PopularCourses>
                <BecomeTeacher></BecomeTeacher>
                <TrendingCourses></TrendingCourses>
                <AboutUs></AboutUs>
                <GridBackgroundDemo></GridBackgroundDemo>
                <Footer></Footer>
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

        // <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        //     {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">

        //     </div> */}

        // </div>
    );
};

export default Home;