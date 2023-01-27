"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[1560],{1560:function(e,n,l){l.r(n),n.default='import React, { useState, useEffect, useCallback } from \'react\'\nimport useEmblaCarousel, { EmblaOptionsType } from \'embla-carousel-react\'\nimport {\n  DotButton,\n  PrevButton,\n  NextButton,\n} from \'./EmblaCarouselArrowsDotsButtons\'\nimport imageByIndex from \'../imageByIndex\'\n \ntype PropType = {\n  slides: number[]\n  options?: EmblaOptionsType\n}\n \nconst EmblaCarousel: React.FC<PropType> = (props) => {\n  const { slides, options } = props\n  const [emblaRef, emblaApi] = useEmblaCarousel(options)\n  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)\n  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)\n  const [selectedIndex, setSelectedIndex] = useState(0)\n  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])\n \n  const scrollPrev = useCallback(\n    () => emblaApi && emblaApi.scrollPrev(),\n    [emblaApi],\n  )\n  const scrollNext = useCallback(\n    () => emblaApi && emblaApi.scrollNext(),\n    [emblaApi],\n  )\n  const scrollTo = useCallback(\n    (index: number) => emblaApi && emblaApi.scrollTo(index),\n    [emblaApi],\n  )\n \n  const onSelect = useCallback(() => {\n    if (!emblaApi) return\n    setSelectedIndex(emblaApi.selectedScrollSnap())\n    setPrevBtnEnabled(emblaApi.canScrollPrev())\n    setNextBtnEnabled(emblaApi.canScrollNext())\n  }, [emblaApi, setSelectedIndex])\n \n  useEffect(() => {\n    if (!emblaApi) return\n    onSelect()\n    setScrollSnaps(emblaApi.scrollSnapList())\n    emblaApi.on(\'select\', onSelect)\n    emblaApi.on(\'reInit\', onSelect)\n  }, [emblaApi, setScrollSnaps, onSelect])\n \n  return (\n    <>\n      <div className="embla">\n        <div className="embla__viewport" ref={emblaRef}>\n          <div className="embla__container">\n            {slides.map((index) => (\n              <div className="embla__slide" key={index}>\n                <div className="embla__slide__number">\n                  <span>{index + 1}</span>\n                </div>\n                <img\n                  className="embla__slide__img"\n                  src={imageByIndex(index)}\n                  alt="Your alt text"\n                />\n              </div>\n            ))}\n          </div>\n        </div>\n \n        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />\n        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />\n      </div>\n \n      <div className="embla__dots">\n        {scrollSnaps.map((_, index) => (\n          <DotButton\n            key={index}\n            selected={index === selectedIndex}\n            onClick={() => scrollTo(index)}\n          />\n        ))}\n      </div>\n    </>\n  )\n}\n \nexport default EmblaCarousel\n'}}]);
//# sourceMappingURL=1560-f8155b6a1c1a27549a2f.js.map