import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "../cards/TestimonialCard";
import { slidesData } from "../../data/caresoulData";

const EmblaCarousel = ({ emblaRef }) => {
  return (
    <section className="embla w-full">
      <div className="embla__viewport p-3 py-10" ref={emblaRef}>
        <div className="embla__container  group -z-50">
          {slidesData?.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <TestimonialCard slide={slide} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
