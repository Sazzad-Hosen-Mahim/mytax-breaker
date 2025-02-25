import Header2 from "./ReuseComponent/Header2";

const ReliableConsultant = () => {
    return (
        <div className="mb-[50px] md:mb-[80px] lg:mb-[490px] xl:mb-[450px]">
            <Header2
                heading={
                    <div className="whitespace-pre text-center">
                        Reliable Consultants,
                        {"\n"}
                        Measurable Results
                    </div>
                }
                para={
                    <div className="whitespace-pre">
                        Select us becouse of our experties,
                        {"\n"}
                        inventiveness, and traack record of accomplishment
                    </div>

                }
            />
        </div>
    );
};

export default ReliableConsultant;
