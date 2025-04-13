import React from "react";
import Button from "../ui/Button";
import circleBackgroundGIF from "/backgrounds/circle-background1.gif";
import StepCard from "../cards/StepCard";

const StepsSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${circleBackgroundGIF})` }}
      className="bg-no-repeat bg-center"
    >
      <div className="w-full bg-cover bg-transparent background-gradient bg-center mix-blend-plus-darker">
        <div className="w-full container-custom  bg-center p-5 py-26 md:py-26 md:p-12">
          <div className="gap-y-5 flex w-full flex-col">
            <h3 className="uppercase text-text-secondary text-center lg:text-start text-xl lg:text-2xl font-medium">
              Get same-day online
            </h3>
            <div className="flex lg:justify-center flex-col lg:flex-row justify-between items-center gap-5">
              <h1 className="text-text-primary w-full text-4xl lg:text-[52px] leading-tight font-medium text-center lg:text-start">
                Suboxone Treatment In 10 Minutes
              </h1>
              <Button className="lg:w-[400px]" text="Download the app today" />
            </div>
          </div>
          <div className=" mt-24">
            <div className="w-full gap-y-10 sm:gap-y-0 flex flex-col sm:flex-row justify-between items-stretch">
              <StepCard
                heading="Step 1 - Download The App"
                subHeading="Click the link to download our app to get started."
              />
              <StepCard
                heading="Step 2 - Complete Onboarding Process & Documents"
                subHeading="Provide medical history and sign treatment forms."
              />
            </div>
            <div className="w-full mt-10 sm:mt-20 flex justify-between flex-col sm:flex-row items-stretch gap-y-10 sm:gap-y-0">
              <StepCard
                heading="Step 3 - Schedule Your First Visit"
                subHeading="Our onboarding team will send you a link to book your first meeting. Many times, this is the same day."
              />
              <StepCard
                heading="Step 4 - Meet With Licensed Provider"
                subHeading="At the time of your appointment, open the app on your phone to have your visit."
              />
            </div>
            <div className="flex w-full mt-10 sm:text-center sm:mt-14 justify-center  items-stretch">
              <StepCard
                className="lg:w-[50%] md:w-full"
                heading="Step5 - Pick Up Medication"
                subHeading="Your script will be sent to your pharmacy of choice for pick up the same day."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
