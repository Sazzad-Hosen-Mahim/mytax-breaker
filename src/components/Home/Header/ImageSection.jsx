import StatsCard from "./StatsCard";
import bannerImage from "../../../assets/header/header-banner.png";

const ImageSection = ({ showStatsCard = true }) => {
  return (
    <div className="relative mt-24 mb-32 flex justify-center mx-auto lg:w-[1594px] h-[721px] px-4">
      <div className="relative rounded-3xl overflow-hidden object-cover lg:w-[1320px] lg:h-[664px]">
        <img
          src={bannerImage}
          alt="Team collaboration"
          className="lg:w-[1320px] lg:h-[664px] object-cover"
        />

        {/* Conditionally render StatsCard based on showStatsCard prop */}
        {showStatsCard && (
          <div className="mt-60 ms-12 lg:absolute -bottom-60 -right-55 mx-auto lg:-right-55 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
            <StatsCard
              globalClients="100+"
              teamMembers="150+"
              businessExperience="15+"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
