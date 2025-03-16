
/* eslint-disable react/prop-types */
const CourseCard = ({ course }) => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
            <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-t-md"
            />
            <h4 className="mt-4 font-bold text-lg">{course.title}</h4>
            <p className="text-sm text-gray-500">{course.description}</p>
            <p className="mt-2 text-gray-600">
                <strong>Level:</strong> {course.level}
            </p>
            <p className="text-gray-600">
                <strong>Duration:</strong> {course.duration}
            </p>
            <p className="text-gray-600">
                <strong>Rating:</strong> {course.rating} ⭐
            </p>
        </div>
    );
};

export default CourseCard;