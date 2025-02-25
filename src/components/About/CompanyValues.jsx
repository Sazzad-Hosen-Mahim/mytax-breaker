import aboutcard1 from "../../assets/aboutcard2.png";
import aboutcard2 from "../../assets/aboutcard2.png";
import aboutcard3 from "../../assets/aboutcard3.png";

const values = [
    {
        title: "Highlight Value One",
        image: aboutcard1,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    },
    {
        title: "Highlight Value Two",
        image: aboutcard2,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros ",
    },
    {
        title: "Highlight Value Three",
        image: aboutcard3,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros",
    },
];

const CompanyValues = () => {
    return (
        <section className="mt-12 mb-12  w-full mx-auto py-6 bg-white">
            {/* Content Wrapper to center everything */}
            <div className="w-full max-w-[1480px] mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    {/* Left Side Content */}
                    <div className="md:w-1/2 w-full text-center md:text-left">
                        <button className="w-[140px] h-[50px] bg-light-green text-green-900 font-semibold px-4 py-2 rounded-lg mb-4">
                            Our Values
                        </button>
                        <h2 className="text-black text-3xl md:text-4xl font-bold">
                            Emphasize What's Important To Your Company
                        </h2>
                    </div>

                    {/* Right Side Content */}
                    <div className="md:w-1/2 w-full text-center md:text-left">
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                    </div>
                </div>

                {/* Values Cards Section */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-[461px] mx-auto"
                        >
                            <img
                                src={value.image}
                                alt={value.title}
                                className="rounded-md w-full h-[280px] object-cover"
                            />
                            <h3 className="text-xl text-black font-semibold mt-4">{value.title}</h3>
                            <p className="text-gray-600 mt-2">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyValues;
