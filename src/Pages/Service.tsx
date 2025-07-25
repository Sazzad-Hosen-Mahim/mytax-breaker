import CommonWrapper from "../components/CommonWrapper/CommonWrapper";
import Card2 from "../components/Home/section3/components/Card2";

function Service() {
  return (
    <CommonWrapper>
      <div className="flex justify-center py-48 gap-6 sm:py-16 sm:px-2">
        <div
          className="
            grid grid-cols-1 md:grid-cols-3 gap-8
            sm:grid-cols-1
            sm:gap-4
            w-full
            sm:overflow-x-auto
          "
        >
          <Card2
            bgColor={""}
            title={"Broad Range ofServices Available."}
            content={
              "An extensive assortment of availableservices tailored to meet your diverse needs and preferences"
            }
            buttonText={"View Full Catalog"}
            logo={""}
            isCentered={false}
            finance={false}
          />
          <Card2
            bgColor="bg-[#EFEFEF]"
            content={
              " Innovation initiatives, our advisory solutions are tailored toaddress the unique contours of your business landscape"
            }
            title={"Financial Services"}
            logo={"./service-1.png"}
            buttonText={"View More"}
            isCentered={false}
            finance={false}
          />
          <Card2
            bgColor="bg-[#EFEFEF]"
            title={"Task Control"}
            content={
              "Sustainable growth, our service commitm- ent is guide the terrain of financial expectations with clarity and precision."
            }
            logo={"./service-2.png"}
            buttonText={"View More"}
            isCentered={false}
            finance={false}
          />
          <Card2
            bgColor="bg-[#EFEFEF]"
            title={"Financial Growth"}
            content={
              "Intricacies of capital deployment and investment growth to empower business with informed decision-making."
            }
            logo={"./service-3.png"}
            buttonText={"View More"}
            isCentered={false}
            finance={false}
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
            isCentered={false}
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
            finance={false}
          />
        </div>
      </div>
    </CommonWrapper>
  );
}

export default Service;
