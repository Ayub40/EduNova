import Categories from "../../components/Homes/Categories/Categories";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Category = () => {
    return (
        <div className="my-6 mt-14">
            <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}

                className="space-y-2">
                <h3 className="text-4xl font-bold text-center"><span className="text-[#F7C32E]">Explore</span> <span className="text-[#6F42C1]">Top</span> <span className="text-[#03B97C] text-4xl font-bold">Categories</span></h3>
                <p className="text-center text-[#8C8B8B] text-lg">Courses that help beginner designers become true unicorns.</p>
            </motion.div>
            <Categories></Categories>
        </div>
    );
};

export default Category;