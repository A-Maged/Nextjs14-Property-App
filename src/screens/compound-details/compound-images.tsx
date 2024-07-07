"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

type Props = {
  images: string[];
};

export function CompoundImages({ images }: Props) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, A11y]}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      {images.map((imgSrc) => (
        <SwiperSlide key={imgSrc}>
          <div
            className="h-[60vh] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
