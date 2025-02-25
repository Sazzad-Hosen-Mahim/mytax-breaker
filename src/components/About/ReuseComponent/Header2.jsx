import ImageSection2 from "./ImageSection2";

const Header2 = ({ heading, para }) => {
    return (
        <div
            className="w-full lg:h-[694px] h-[630px] sm:h-[650px]"
            style={{
                background:
                    "radial-gradient(55.97% 157.65% at 50.89% 48.56%, #004D3F 0%, #004D3F 53.5%, #26714B 100%)",
            }}
        >
            <div className="grid lg:grid-cols-3 gap-6 lg:mx-[359px] pt-36 px-4 sm:px-6">
                {/* Heading */}
                <h1 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl">
                    {heading}
                </h1>

                {/* Empty space for center alignment */}
                <div></div>

                {/* Paragraph */}
                <div>
                    <p className="text-white text-base sm:text-lg lg:text-xl">
                        {para}
                    </p>
                </div>
            </div>

            {/* Image Section */}
            <div>
                <ImageSection2 />
            </div>
        </div>
    );
};

export default Header2;
