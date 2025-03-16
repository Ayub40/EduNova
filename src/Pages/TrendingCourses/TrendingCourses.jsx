import TrendCourses from "../../components/TrendingCourses/TrendCourses";


const TrendingCourses = () => {
    return (
        <div className="mt-24 mb-24 space-y-5 max-w-7xl mx-auto">
            <div className="space-y-3">
                <h3 className="text-center text-4xl font-bold">Explore Featured Courses</h3>
                <p className="text-center text-lg">Check out most 🔥 courses in the market</p>
            </div>
            <TrendCourses></TrendCourses>
        </div>
    );
};

export default TrendingCourses;