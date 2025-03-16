

const ApplyForm = () => {


  return (
    <div className="bg-[url('https://gaviaspreview.com/wp/wellearn/wp-content/uploads/2024/08/bg-shape-1.png')] bg-left-top bg-no-repeat border border-white">
      <div className="">
        {/* border line */}
        <h3 className="text-4xl font-bold text-left max-w-screen-xl m-auto mt-24">Apply As Instructor</h3>
        <p className="border-b-[2px] mt-3 max-w-screen-xl m-auto"></p>
        {/*  */}
      </div>
      <div className="mb-24 grid md:grid-cols-2  max-w-7xl mx-auto">

        <div className="m-3 ">

          {/* <h3 className="text-3xl font-bold ">Apply As Instructor</h3>
          <p className="border-b-[1px] mt-3"></p> */}
          <div className="mt-5 space-y-5">
            <h3 className="text-2xl font-semibold">Become an Instructor</h3>
            <p className="text-lg">Join the world’s largest online learning marketplace now</p>
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">Instructor Rules</h3>
              <p className="text-lg">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              <li className="text-lg">Ensure all lessons, materials, and tools are ready before each session.</li>
              <li className="text-lg">Communicate respectfully with students, staff, and peers.</li>
              <li className="text-lg">Promote open discussions and encourage students to ask questions.</li>
              <li className="text-lg">Ensure all content is original or appropriately sourced.</li>
              <li className="text-lg">Regularly update course content to include the latest industry trends.</li>
            </div>
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold">Start With Courses</h3>
              <p className="text-lg">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              <li className="text-lg"> Create and teach courses on topics you’re passionate about.</li>
              <li className="text-lg">Teach students from around the world and expand your impact.</li>
              <li className="text-lg">Monetize your knowledge by earning money for each course enrollment.</li>
              <li className="text-lg">Build your profile and showcase your expertise.</li>
              <li className="text-lg">Get paid directly through the platform as students enroll in your courses.</li>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="">
          <form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50  mt-14 bg-[#F4F4F8] h-[811px]">
            <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">Name</label>
              <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100 border" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ml-1">Email</label>
              <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100 border" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ml-1">
                <div className="label">
                  <span className="label-text">Experience Level*</span>
                </div>
                <select defaultValue="default" name="" id="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100 border">
                  <option disabled value="default">Select a category</option>
                  <option value="beginner">Beginner</option>
                  <option value="mid-level">Mid-level</option>
                  <option value="experienced">Experienced</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 ml-1">Message</label>
              <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100 border"></textarea>
            </div>
            {/* <div>
              <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">Send</button>
            </div> */}
            <div>
              <button
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;