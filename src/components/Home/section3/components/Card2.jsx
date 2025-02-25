import "@fontsource/raleway";
import "@fontsource/karla"; // Import Karla font globally
import { GoArrowRight } from "react-icons/go";

function Card2({
  bgColor,
  content,
  title,
  logo,
  buttonText,
  isCentered,
  finance,
}) {
  return (
    <div
      className={`w-[420px] h-[380px] flex justify-center items-center rounded-3xl ${bgColor}`}
    >
      <div className=" w-[321px] h-[281.15px] flex flex-col justify-between gap-2 p-2">
        {/* Logo */}
        <div className={`flex ${isCentered ? "justify-center" : " "}  `}>
          {logo ? (
            <img src={logo} alt="Logo" className="w-[70px] " />
          ) : (
            <p className="text-primary-button font-bold">Our Services</p>
          )}
        </div>

        {/* Content */}
        <div>
          <p
            className={`text-3xl my-3 ${
              isCentered ? "text-center text-primary-button" : " "
            } text-[#0C121D] font-semibold`}
          >
            {title}
          </p>
          <p
            className={` ${
              isCentered
                ? "text-center text-primary-button"
                : finance
                ? "text-left mt-5"
                : "text-left"
            }  text-[16px] font-karla text-[#0C121D] leading-[28px]  max-w-[450px] break-words `}
          >
            {content}
          </p>
        </div>

        {/* Button (Fix: Ensure it stays at the bottom) */}
        <div
          className={`flex flex-row ${
            isCentered
              ? "justify-center bg-primary-button text-light-green w-2/3 mx-auto rounded-lg mt-4"
              : ""
          } py-4 text-left font-raleway text-[15.44px] font-semibold items-center`}
        >
          {buttonText === "View Full Catalog" ? (
            // Render the large green button
            <button className="bg-[#A7EB94] text-primary-button-text w-[194px] h-[52px] -mt-2 rounded-lg cursor-pointer">
              {buttonText}
            </button>
          ) : (
            <>
              {/* Render the small button */}
              <button className="w-[90px] h-[23.15px] text-left cursor-pointer">
                {buttonText}
              </button>

              {/* Conditionally render the arrow if buttonText is NOT "Get In Touch" or "View Full Catalog" */}
              {buttonText !== "Get In Touch" &&
                buttonText !== "View Full Catalog" && <GoArrowRight />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card2;
