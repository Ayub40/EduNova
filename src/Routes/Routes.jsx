import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import BecomeInstructors from "../Pages/BecomeInstructor/BecomeInstructors";
import AllClasses from "../components/AllClasses/AllClasses";
// import TeacherApply from "../components/BecomeTeacher/TeacherApply";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'allClasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'TeacherApply',
                // element: <TeacherApply></TeacherApply>
                element: <BecomeInstructors></BecomeInstructors>
            }
        ]
    },
]);