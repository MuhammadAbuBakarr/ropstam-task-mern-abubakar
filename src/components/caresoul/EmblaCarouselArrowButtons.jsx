import React, { useCallback, useEffect, useState } from "react";
import grayArrowIcon from "/icons/gray-arrow.svg";
import greenArrowIcon from "/icons/green-arrow.svg";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ onClick }) => {
  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      onClick={onClick}
    >
      <img className="size-8 custom-hover" src={grayArrowIcon} alt="" />
    </button>
  );
};

export const NextButton = ({ onClick }) => {
  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      onClick={onClick}
    >
      <img className="size-8 custom-hover" src={greenArrowIcon} alt="" />
    </button>
  );
};
