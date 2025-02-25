import CompanyValues from "../components/About/CompanyValues";
import GuidingValues from "../components/About/GuidingValues";
import MeetOutTeam from "../components/About/MeetOutTeam";
import ReliableConsultant from "../components/About/ReliableConsultant";
import StatsCards from "../components/About/StatsCards";
import SuccessStory from "../components/About/SuccessStory";
import Timeline from "../components/About/Timeline";
import CommonWrapper from "../components/CommonWrapper/CommonWrapper";
import UpdatedArticles from "../components/Home/updatedAreticals/UpdatedArticels";
import Review from "../components/shared/Review";

const About = () => {
  return (
    <div>
      <ReliableConsultant />
      <CommonWrapper>
        <StatsCards />
      </CommonWrapper>
      <CommonWrapper>
        <SuccessStory />
      </CommonWrapper>
      <Timeline />
      <CommonWrapper>
        <CompanyValues />
      </CommonWrapper>
      <Review />
      <CommonWrapper>
        <MeetOutTeam />
      </CommonWrapper>
      <CommonWrapper>
        <GuidingValues />
      </CommonWrapper>

      <UpdatedArticles />
    </div>
  );
};

export default About;

{
  /* <div className="w-full h-[500px] bg-light-green">About page</div> */
}
