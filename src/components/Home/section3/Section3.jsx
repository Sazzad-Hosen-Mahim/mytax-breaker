import CommonWrapper from "../../CommonWrapper/CommonWrapper";
import Card2 from "./components/Card2";

function Section3() {
  return (
    <CommonWrapper>
      <div className="flex  justify-center gap-6  py-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card2
            title={"Broad Range ofServices Available."}
            content={
              "An extensive assortment of availableservices tailored to meet your diverse needs and preferences"
            }
            buttonText={"View Full Catalog"}
          />
          <Card2
            bgColor="bg-[#EFEFEF]"
            content={
              " Innovation initiatives, our advisory solutions are tailored toaddress the unique contours of your business landscape"
            }
            title={"Financial Services"}
            logo={"./service-1.png"}
            buttonText={"View More"}
          />
          <Card2
            bgColor="bg-[#EFEFEF]"
            title={"Task Control"}
            content={
              "Sustainable growth, our service commitm- ent is guide the terrain of financial expectations with clarity and precision."
            }
            logo={"./service-2.png"}
            buttonText={"View More"}
          />
          <Card2
            bgColor="bg-[#EFEFEF]"
            title={"Financial Growth"}
            content={
              "Intricacies of capital deployment and investment growth to empower business with informed decision-making."
            }
            logo={"./service-3.png"}
            buttonText={"View More"}
          />
          <Card2
            bgColor="bg-[#EFEFEF]"
            title={"Capital Investments"}
            content={
              "Guiding businesses through the complexities of the financial management, risk mitigation, and strategic growth."
            }
            logo={"./service-4.png"}
            buttonText={"View More"}
            finance={true}
          />
          <Card2
            bgColor="bg-[#A7EB94]"
            title={"Reach for us"}
            content={
              "Propelling your business forward, offering tailored solutions and insightful guidance."
            }
            logo={"./service-5.png"}
            buttonText={"Get In Touch"}
            isCentered={true}
          />
        </div>
      </div>
    </CommonWrapper>
  );
}

export default Section3;
