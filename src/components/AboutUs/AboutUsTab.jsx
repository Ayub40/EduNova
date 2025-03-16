import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tabs = ["About Us", "Our Vision", "Our Mission"];
// const tabs = ["WELCOME TO EDUNOVA", "EDUNOVA’S VISION", "EDUNOVA’S MISSION"];

const AboutUsTab = () => {
    const [selected, setSelected] = useState(tabs[0]);  // This is for Tab button
    const [data, setData] = useState([]);

    useEffect(() => {
        // Correct fetch path for the public folder
        fetch("/aboutUs.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching aboutUs.json:", error));
    }, []);

    // Map the selected tab to corresponding data
    const tabMapping = {
        "About Us": "WELCOME TO EDUNOVA",
        "Our Vision": "EDUNOVA’S VISION",
        "Our Mission": "EDUNOVA’S MISSION",
    };

    // Match selected tab with data
    // const selectedData = data.find(
    //     (item) => item.title.toLowerCase() === selected.toLowerCase()
    // );
    const selectedData = data.find((item) => item.title === tabMapping[selected]);

    return (
        <div className="">
            {/* Tabs for navigation */}
            <div className=" flex items-center flex-wrap gap-8">
                {tabs.map((tab) => (
                    <Chip
                        text={tab}
                        selected={selected === tab}
                        setSelected={setSelected}
                        key={tab}
                    />
                ))}
            </div>

            {/* Display content based on the selected tab */}
            <div className="mt-5">
                {selectedData ? (
                    <div className="space-y-3">
                        <h1 className="text-[#8C8B8B] text-lg">{selectedData.title}</h1>
                        <h2 className="text-4xl font-bold text-[#011C1A]">{selectedData.subTitle}</h2>
                        <p className="mt-4 text-[#8C8B8B]">{selectedData.description}</p>
                        <div className="mt-6 flex gap-8">
                            <div className="flex flex-col space-y-3">
                                <div className="w-[60px] h-[60px] rounded-full bg-[#FCEEEE] place-content-center place-items-center">
                                    <img
                                        src={selectedData.logoOne}
                                        alt={selectedData.smallTitleOne}
                                        className="w-8 h-8 m-auto"
                                    />
                                </div>
                                <h3 className="mt-2 text-xl font-bold">{selectedData.smallTitleOne}</h3>
                                <p className="text-sm text-[#8C8B8B]">{selectedData.smallDescriptionOne}</p>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <div className="w-[60px] h-[60px] rounded-full bg-[#F2F9F4] place-content-center place-items-center">
                                    <img
                                        src={selectedData.logoTwo}
                                        alt={selectedData.smallTitleTwo}
                                        className="w-8 h-8 m-auto"
                                    />
                                </div>
                                <h3 className="mt-2 text-xl font-bold">{selectedData.smallTitleTwo}</h3>
                                <p className="text-sm text-[#8C8B8B]">{selectedData.smallDescriptionTwo}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>



        // <div className="px-4 flex items-center flex-wrap gap-8 ">
        //     {tabs.map((tab) => (
        //         <Chip
        //             text={tab}
        //             selected={selected === tab}
        //             setSelected={setSelected}
        //             key={tab}
        //         />
        //     ))}
        // </div>
    );
};


const Chip = ({
    text,
    selected,
    setSelected,
}) => {
    return (
        <div
            onClick={() => setSelected(text)}
            // onClick={() => setSelected(text)}
            className={`${selected
                ? "text-[#07A698] font-bold border-[#07A698] text-lg"
                : "text-[#07A698] text-lg hover:text-[#2AA9BD] "
                } relative cursor-pointer text-lg border-b-2 transition-colors rounded-md py-3 px-6`}
        // } relative text-sm transition-colors rounded-md py-3 px-6`}
        >
            <span className="relative z-10">{text}</span>
            {selected && (
                <motion.span
                    // layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.8 }}
                    className="absolute inset-0 z-0 rounded-md"
                // className="absolute inset-0 z-0 bg-[#07A698] rounded-md"
                ></motion.span>
            )}
        </div>
    );
};

export default AboutUsTab;