/* eslint-disable @next/next/no-img-element */
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface ImageSwiperProps {
  images: string[];
}

const Carousel: React.FC<ImageSwiperProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      style={{
        width: '100vw',
        height: '85vh',
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
