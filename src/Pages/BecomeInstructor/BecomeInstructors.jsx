import ApplyForm from "../../components/BecomeTeacher/ApplyForm";
import State from "../../components/BecomeTeacher/State";
import TeacherApply from "../../components/BecomeTeacher/TeacherApply";
import TeacherDescription from "../../components/BecomeTeacher/TeacherDescription";


const BecomeInstructors = () => {
    return (
        <div>
            <TeacherApply></TeacherApply>
            <TeacherDescription></TeacherDescription>
            <State></State>
            {/* <SignupFormDemo></SignupFormDemo> */}
            <ApplyForm></ApplyForm>
        </div>
    );
};

export default BecomeInstructors;