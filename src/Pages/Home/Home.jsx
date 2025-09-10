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
      if (window.scrollY > 300) {
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
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col gap-10">
        {/* Hero Section */}
        <Banner />

        {/* Stats Section */}
        <div className="px-4 sm:px-6 lg:px-12">
          <Total />
        </div>

        {/* Categories */}
        <div className="px-4 sm:px-6 lg:px-12">
          <Category />
        </div>

        {/* Popular Courses */}
        <div className="px-4 sm:px-6 lg:px-12">
          <PopularCourses />
        </div>

        {/* Become a Teacher */}
        <div className="px-4 sm:px-6 lg:px-12">
          <BecomeTeacher />
        </div>

        {/* Trending */}
        <div className="px-4 sm:px-6 lg:px-12">
          <TrendingCourses />
        </div>

        {/* About Us */}
        <div className="px-4 sm:px-6 lg:px-12">
          <AboutUs />
        </div>

        {/* Background */}
        <GridBackgroundDemo />

        {/* Footer */}
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showArrow && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#24A7BC] text-white rounded-full shadow-lg cursor-pointer hover:bg-[#0CBC87] transition-all md:bottom-8 md:right-9"
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </div>
  );
};

export default Home;
