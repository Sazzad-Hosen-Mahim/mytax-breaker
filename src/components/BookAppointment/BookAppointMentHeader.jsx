import CommonWrapper from "../CommonWrapper/CommonWrapper";

const BookAppointMentHeader = () => {
  return (
    <div
      className="w-full h-[400px] lg:h-[805px] px-4 sm:px-6 md:px-8 lg:px-12"
      style={{
        background:
          "radial-gradient(55.97% 157.65% at 50.89% 48.56%, #004D3F 0%, #004D3F 53.5%, #26714B 100%)",
      }}
    >
      <CommonWrapper>
        <div className="text-center lg:space-y-4 pt-[50px] lg:pt-[160px]">
          <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight 2xl:text-[60px]">
            Book an Appointment
          </h1>
          <div className="flex justify-center">
            <p className="text-white text-base sm:text-lg md:text-xl max-w-[850px] mx-auto">
              Their contributions and exceptional skills illuminate the path to
              success, guiding our efforts toward innovation and proficiency
              within our intelligence operations.
            </p>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default BookAppointMentHeader;
