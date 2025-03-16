import { useEffect, useState } from 'react';
// import CourseCard from '../Homes/CourseCard ';
import TrendCard from './TrendCard';


const TrendCourses = () => {
    const [courses, setCourses] = useState([]);

    // Fetch data from the public folder (trendingCourses.json)
    useEffect(() => {
        fetch('/trendingCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.error("Error fetching courses:", error));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {courses.map(course => (
                // <CourseCard key={course.id} course={course} />
                <TrendCard key={course.id}
                    course={course}
                ></TrendCard>
            ))}
        </div>
    );
};

export default TrendCourses;