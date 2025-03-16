// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import Lottie from "lottie-react";
import onlineEducation from "../../assets/online class.json";

const ShuffleHero = () => {
    return (
        <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto relative">
            {/* <div className='absolute inset-0 blur-xl ' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div> */}

            {/* <div
                className='absolute inset-0 blur-xl ' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(220, 241, 244, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}>
            </div> */}

            {/* <div className='absolute inset-0 blur-xl ' style={{ background: "linear-gradient(143.6deg, rgba(3, 185, 124, 0) 20.79%, rgba(43, 170, 190, 0.26) 40.92%, rgba(234, 227, 246, 0) 70.35%)" }}></div> */}
            <div className="">
                <span className="block mb-4 text-xs md:text-lg text-[#2AB884] font-semibold">
                    Learn For Peace
                </span>
                <h3 className="text-3xl md:text-5xl font-bold">
                    Let's Learn New Courses & Gain  More Skills
                </h3>
                <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                    Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.
                </p>
                <div className="md:flex mb-4 gap-3">
                    <div className="flex items-center gap-1">
                        <HiMiniCheckBadge /> <p>Learn with experts</p>

                    </div>
                    <div className="flex items-center gap-1">
                        <HiMiniCheckBadge />
                        <p>Get certificate</p>
                    </div>
                    <div className="flex items-center gap-1"><HiMiniCheckBadge />
                        <p>Get membership</p>
                    </div>
                </div>
                <button className="bg-[#FBE9EB] text-[#D6293E] hover:text-[white] font-medium py-3 px-6 rounded transition-all hover:bg-[#d6293e] active:scale-95 relative">
                    Get Started
                </button>
            </div>
            <div className="">
                <Lottie animationData={onlineEducation} />
            </div>
            {/* <ShuffleGrid /> */}
        </section>
    );
};

// const shuffle = (array) => {
//     let currentIndex = array.length,
//         randomIndex;

//     while (currentIndex != 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex],
//             array[currentIndex],
//         ];
//     }

//     return array;
// };

// const squareData = [
//     {
//         id: 1,
//         src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     },
//     {
//         id: 2,
//         src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//         id: 3,
//         src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//         id: 4,
//         src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//         id: 5,
//         src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
//     },
//     {
//         id: 6,
//         src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     },
//     {
//         id: 7,
//         src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     },
//     {
//         id: 8,
//         src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     },
//     {
//         id: 9,
//         src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//     },
//     {
//         id: 10,
//         src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//     {
//         id: 11,
//         src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
//     },
//     {
//         id: 12,
//         src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
//     },
//     {
//         id: 13,
//         src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//     },
//     {
//         id: 14,
//         src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
//     },
//     {
//         id: 15,
//         src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
//     },
//     {
//         id: 16,
//         src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
//     },
// ];

// const generateSquares = () => {
//     return shuffle(squareData).map((sq) => (
//         <motion.div
//             key={sq.id}
//             layout
//             transition={{ duration: 1.5, type: "spring" }}
//             className="w-full h-full"
//             style={{
//                 backgroundImage: `url(${sq.src})`,
//                 backgroundSize: "cover",
//             }}
//         ></motion.div>
//     ));
// };

// const ShuffleGrid = () => {
//     const timeoutRef = useRef(null);
//     const [squares, setSquares] = useState(generateSquares());

//     useEffect(() => {
//         shuffleSquares();

//         return () => clearTimeout(timeoutRef.current);
//     }, []);

//     const shuffleSquares = () => {
//         setSquares(generateSquares());

//         timeoutRef.current = setTimeout(shuffleSquares, 3000);
//     };

//     return (
//         <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
//             {squares.map((sq) => sq)}
//         </div>
//     );
// };

export default ShuffleHero;