const StatsCard = ({ globalClients, teamMembers, businessExperience }) => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-green-800 text-white rounded-lg shadow-lg flex items-center">
      {/* Left side with image and text (rotated) */}
      <div className="flex flex-col items-center mr-6 transform -rotate-90 bg-white text-black">
        <div className="w-16 h-16 rounded-[50%] overflow-hidden mb-4">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image source
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-3xl font-semibold">200+</h2>
        <p>Satisfied Customers</p>
      </div>

      {/* Right side with statistics */}
      <div>
        <h3 className="text-xl font-bold">{globalClients} Global Clients</h3>
        <h3 className="text-xl font-bold mt-2">{teamMembers} Team Members</h3>
        <h3 className="text-xl font-bold mt-2">
          {businessExperience} Business Experience
        </h3>
      </div>
    </div>
  );
};

export default StatsCard;
