import ImageSection from "./ImageSection";
import PropTypes from "prop-types";

const Header = ({
  heading,
  para,
  buttonTitle,
  showImageSection = true,
  showStatsCard = true,
}) => {
  return (
    <div
      className="w-full mx-auto lg:h-[694px] px-1"
      style={{
        background:
          "radial-gradient(55.97% 157.65% at 50.89% 48.56%, #004D3F 0%, #004D3F 53.5%, #26714B 100%)",
      }}
    >
      <div className="lg:flex lg:pt-36 pt-24 px-2 text-center lg:text-start lg:w-1/2 mx-auto">
        <h1 className="text-white font-semibold text-5xl/17 lg:pe-24">
          {heading}
        </h1>

        <div className="lg:w-1/2">
          <p className="text-white text-lg mt-8 lg:mt-0 px-10 lg:px-0">
            {para}
          </p>
          <button className="bg-light-green px-12 py-4 font-bold text-primary-button-text mt-7 rounded-md cursor-pointer hover:bg-light-green/50 hover:shadow-2xl hover:text-white">
            {buttonTitle}
          </button>
        </div>
      </div>

      {/* Conditionally render ImageSection and pass showStatsCard */}
      {showImageSection && <ImageSection showStatsCard={showStatsCard} />}
    </div>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  showImageSection: PropTypes.bool,
  showStatsCard: PropTypes.bool,
};

export default Header;
