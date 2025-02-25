import img1 from "../../../assets/header/client/1.png";
import img2 from "../../../assets/header/client/2.png";
import img3 from "../../../assets/header/client/3.png";

const StatsCard = ({ globalClients, teamMembers, businessExperience }) => {
  return (
    <div className="  bg-[#014e3f] w-[545px] h-[545px] text-white rounded-4xl shadow-lg flex items-center p-2 pb-12">
      {/* Left side with image and text (rotated) */}
      <div className="w-1/3 relative">
        <div className="hidden lg:block absolute -bottom-52 -right-2 w-[120px] h-[380px] p-2 mr-3 bg-white text-black rounded-3xl">
          <div className="-rotate-90 relative">
            <div className="flex justify-center items-center absolute -bottom-7 -left-70">
              <img
                src={img1} // Replace with actual image source
                alt="Profile"
                className="object-cover w-14 h-14 rounded-[50%] -mr-3 border-4 border-white rotate-90" // Negative margin to overlap
              />
              <img
                src={img2} // Replace with actual image source
                alt="Profile"
                className="object-cover w-14 h-14 rounded-[50%] -mr-3 border-4 border-white rotate-90" // Negative margin to overlap
              />
              <img
                src={img3} // Replace with actual image source
                alt="Profile"
                className="object-cover w-14 h-14 rounded-[50%] border-4 border-white rotate-90" // No margin on the last image
              />
            </div>
            <div className="absolute -top-16 right-18">
              <h2 className="text-3xl font-bold w-[150px]">
                200+ <br />
                <span className="font-medium text-sm">Satisfied Customers</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with statistics */}
      <div className="w-2/3 py-2 lg:px-[80px] text-start">
        <div className="">
          <h2 className="font-bold text-5xl">
            {globalClients} <br />
            <p className="text-xl mt-4 font-medium">Global Clients</p>
          </h2>
        </div>
        <div className="">
          <h2 className="font-bold text-5xl">
            {teamMembers} <br />
            <p className="text-xl mt-4 font-medium">Team Members</p>{" "}
          </h2>
        </div>
        <div>
          <h2 className="font-bold text-5xl">
            {businessExperience} <br />
            <p className="text-xl mt-4 font-medium">Business Experience</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
