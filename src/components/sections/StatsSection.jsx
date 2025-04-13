import React from "react";
import backgroundGIF from "/backgrounds/background1.gif";

const StatsSection = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundGIF})` }}
    >
      <div className="bg-white/80 ">
        <div className=" lg:p-16 md:p-12 px-4 py-8 container-custom">
          <div className="flex flex-col lg:flex-row lg:gap-x-14 lg:justify-between items-center">
            <div className="lg:basis-[50%] text-center space-y-3 lg:text-start">
              <h2 className="md:text-5xl text-4xl lg:max-w-[70%] font-medium ">
                Breaking Barriers to Recovery
              </h2>
              <p className="text-xl font-normal leading-relaxed mt-8 text-text-muted">
                Our mission is to make Medication Assisted Treatment accessible
                to people in both major cities and rural communities. We re
                deeply committed to removing obstacles to recovery, ensuring our
                clients get the support they need.
              </p>
            </div>
            {/* RIGHT SECTION */}
            <div className="lg:basis-[50%] flex flex-col lg:flex-col-reverse w-full gap-y-8 mt-8 lg:mt-0">
              <div className="flex justify-between">
                <StatInfo text={"Patients Treated"} value={"500+"} />
                <StatInfo text={"Centers Nationwide"} value={"300+"} />
                <StatInfo text={"Patients Satisfaction"} value={"4.9/5"} />
              </div>
              <p className="text-center lg:text-start text-xl font-normal text-text-muted leading-relaxed">
                Were not just offering a service; were creating a lifeline. Our
                platform is designed to eliminate the challenges that often
                stand in the way of recovery—whether its stigma, inconvenience,
                or lack of access to quality care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
const StatInfo = ({ text, value }) => {
  return (
    <div className="space-y-2 text-center md:text-start">
      <h2 className="frank-ruhi text-text-secondary font-medium text-3xl md:text-[40px]">
        {value}
      </h2>
      <div className="text-text-muted md:text-xl text-sm font-medium">
        {text}
      </div>
    </div>
  );
};
