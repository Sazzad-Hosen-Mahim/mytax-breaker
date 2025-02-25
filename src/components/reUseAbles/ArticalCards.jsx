// ArticalCards Component
import React from "react";
import Button from "./Buttons";

const ArticalCards = ({
  layout = "vertical",
  date,
  title,
  description,
  imgage,
  buttonText,
}) => {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`
        ${
          isHorizontal
            ? "p-4 md:p-[18px]"
            : "pt-[20px] md:pt-[34px] lg:py-[50px]"
        }
        ${isHorizontal ? "flex-row" : "flex-col"}
        bg-white rounded-2xl lg:flex w-full md:w-auto shadow-md lg:py-[10px]
      `}
    >
      <img
        className={`
          ${isHorizontal ? "w-[270px] md:w-[279px]" : "w-full md:w-[515px]"}
          rounded-lg bg-gray-600 object-cover mx-auto
        `}
        src={imgage}
        alt="add img"
      />

      <div
        className={`
          ${
            isHorizontal
              ? "ml-4 md:ml-[20px] w-full"
              : "mt-4 md:mt-[16px] w-full md:w-[90%]"
          }
          flex flex-col justify-between mx-auto
        `}
      >
        <div className="flex justify-between items-center mt-2 md:mt-[22px]">
          <h6 className="text-sm md:text-base">{date}</h6>
          <button className="p-3 bg-[#004D3F]/15 text-primary-button mx-4 rounded-md">
            {buttonText}
          </button>
        </div>

        <h4 className="font-raleway font-semibold text-lg md:text-[22px] leading-snug mt-2 md:mt-[21px]">
          {title}
        </h4>

        <p className="text-sm md:text-[16px] leading-relaxed mt-2 md:mt-[21px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticalCards;
