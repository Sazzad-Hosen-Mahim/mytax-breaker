import CommonWrapper from "../components/CommonWrapper/CommonWrapper";
import AboutUs from "../components/Home/AboutUs/AboutUs";
import Section from "../components/Home/Form/Section";
import GetProfessional from "../components/Home/GetProfessional/GetProfessional";
import OnboardPlaning from "../components/Home/GetProfessional/OnboardPlaning";
import Header from "../components/Home/Header/Header";
import PioneeringSolution from "../components/Home/PioneeringSolution/PioneeringSolution";
import SectionPricing from "../components/Home/pricing/SectionPricing";
import Section3 from "../components/Home/section3/Section3";
import UpdatedArticles from "../components/Home/updatedAreticals/UpdatedArticels";
import Review from "../components/shared/Review";

const Home = () => {
  return (
    <div>
      <Header
        heading={"Driving Growth for Your Business"}
        para={
          "Expert consulting drives corporate growth with creative strategy and solutions."
        }
        buttonTitle={"Explore More"}
      />
      <CommonWrapper>
        <OnboardPlaning />
        <AboutUs />
      </CommonWrapper>
      <GetProfessional />
      <Section3 />
      <PioneeringSolution />
      <Review />
      <SectionPricing />
      <UpdatedArticles />
      <Section />
    </div>
  );
};

export default Home;
