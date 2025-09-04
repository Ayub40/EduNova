import { MdWifiCalling3 } from "react-icons/md";
// import { MdElectricBolt } from "react-icons/md";
import AboutUsTab from "../../components/AboutUs/AboutUsTab";

const AboutUs = () => {
    return (
        <div className="flex mb-24 max-w-7xl mx-auto gap-16">
            <div className="flex mt-2 w-[620px] h-[550px] relative">
                <div className="h-[371px] w-[294px]">
                    {/* <img className="mt-3 ml-1 outline outline-offset-4 outline-2 outline-[#DDE1E7] rounded-tr-[60px] rounded-bl-[60px]"
                        src="https://html.rrdevs.net/edcare/assets/img/images/about-img-1.jpg" alt="" /> */}
                    <img className="mt-3 ml-1 outline outline-offset-4 outline-2 outline-[#DDE1E7] rounded-tr-[60px] rounded-bl-[60px]"
                        src="	https://eduna-template.vercel.app/eduna/assets/images/team/team-1/3.png" alt="" />
                    <div className="flex gap-3 h-[110px] w-[290px] border border-[#07A698] bg-[#24A7BC] rounded-tr-[60px] rounded-bl-[60px] mt-8 place-content-center place-items-center">
                        {/* <div className="flex gap-3 h-[110px] w-[290px] border border-[#07A698] bg-[#07A698] rounded-tr-[60px] rounded-bl-[60px] mt-8 place-content-center place-items-center"> */}
                        <div className="h-12 w-12 bg-white rounded-full p-3 place-content-center">
                            <MdWifiCalling3 className="h-[20px] w-[20px] text-[#07A698]" />
                        </div>
                        <div className="">
                            <h3 className="text-white text-sm font-medium">Online Support</h3>
                            <p className="text-white text-2xl font-semibold">+258 152 3659</p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-7 right-5 h-[371px] w-[294px] ">
                    {/* <img className="rounded-tl-[60px] rounded-br-[60px] outline outline-offset-4 outline-2 outline-[#DDE1E7]" src="https://html.rrdevs.net/edcare/assets/img/images/about-img-2.jpg" alt="" /> */}
                    <img className="rounded-tl-[60px] rounded-br-[60px] outline outline-offset-4 outline-2 outline-[#DDE1E7] ml-3" src="https://eduna-template.vercel.app/eduna/assets/images/testimonial/testimonial-2/testimonial-img.png" alt="" />
                </div>
            </div>
            {/* Right Side */}
            {/* <div className="w-[660px] h-[600px] p-4 space-y-5"> */}
            <div className="w-1/2 h-[600px] p-4 space-y-5">
                {/* <div className="flex gap-2 p-2 border w-[195px] rounded-full place-content-center place-items-center">
                    <div className="h-7 w-7 rounded-full p-1 bg-[#DAF2F0] place-content-center">
                        <MdElectricBolt className="font-black text-lg m-auto text-[#07A698]" />
                    </div>
                    <h3 className="text-sm font-semibold">Get More About Us</h3>
                </div> */}
                <AboutUsTab></AboutUsTab>
                {/* <h2 className="text-4xl font-bold text-[#162726]">Over 10 Years in Distant learning for Skill Development</h2>
                <p className="text-[#6C706F]">
                    Compellingly procrastinate equity invested markets with efficient process improvements. actualize mission-critical    partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.
                </p>
                <div className="flex justify-between pb-8">
                    <div className="flex gap-3 p-2 place-content-center place-items-center">
                        <div className="border rounded-full shadow-md border-[#E0E5EB] h-[80px] w-[100px] place-content-center">
                            <img className="h-[40px] w-[40px]  bg-[#FFFFFF] m-auto" src="https://html.rrdevs.net/edcare/assets/img/icon/about-1.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-[#07A698] text-[40px] font-bold">6.7k+</h2>
                            <p>
                                Total active students taking gifted courses
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 p-2 place-content-center place-items-center">
                        <div className="border rounded-full shadow-md border-[#E0E5EB] h-[80px] w-[100px] place-content-center">
                            <img className="h-[40px] w-[40px]  bg-[#FFFFFF] m-auto" src="https://html.rrdevs.net/edcare/assets/img/icon/about-2.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-[#07A698] text-[40px] font-bold">6.7k+</h2>
                            <p>
                                Total active students taking gifted courses
                            </p>
                        </div>
                    </div>
                </div>

                <button className="text-lg font-bold py-3 px-10 rounded-full text-white bg-[#07A698]">
                    Start Free Trial
                </button> */}

            </div>
        </div>
    );
};

export default AboutUs;