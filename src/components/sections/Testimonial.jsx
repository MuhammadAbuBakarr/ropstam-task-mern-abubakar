import React, { useState } from "react";
import grayArrowIcon from "/icons/gray-arrow.svg";
import greenArrowIcon from "/icons/green-arrow.svg";
import EmblaCarousel from "../caresoul/Caresoul";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../caresoul/EmblaCarouselArrowButtons";
import TestimonialCard from "../cards/TestimonialCard";
import { OPTIONS } from "../../data/caresoulData";

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
    <div className="flex container-custom flex-col gap-9 w-full p-5 md:p-12">
      <div className="flex w-full justify-between items-center">
        <div className="gap-y-5 flex w-full flex-col">
          <h3 className="uppercase text-text-secondary text-start text-xl md:text-2xl font-medium">
            Our Client’s
          </h3>
          <div className="flex justify-between items-center">
            <h1 className="text-text-primary w-full text-4xl md:text-[52px] leading-tight font-medium">
              Testimonials
            </h1>
            <div className="flex gap-3">
              <PrevButton onClick={onPrevButtonClick} />
              <NextButton onClick={onNextButtonClick} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <EmblaCarousel emblaRef={emblaRef} />
      </div>
    </div>
  );
};

export default Testimonial;
