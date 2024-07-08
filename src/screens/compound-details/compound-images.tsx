"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";

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
        <SwiperSlide key={imgSrc} style={{ height: 500 }}>
          <Image
            src={imgSrc}
            fill={true}
            layout="fill"
            alt="compound-image"
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
