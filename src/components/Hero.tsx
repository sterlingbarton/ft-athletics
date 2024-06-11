'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export function Hero() {
  const images = ['/hero-1.png', '/hero-2.png', '/hero-3.png'];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000); // Change image every 5000 milliseconds (5 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [images.length]);
  return (
    <div className="relative bg-white h-[60vh] md:h-[90vh]">
      <div className="h-screen absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[90%] h-full overflow-hidden rounded-br-custom">
          <Image
            src={images[currentImage]}
            fill
            quality={100}
            alt="Hero"
            className="absolute object-cover w-full h-full rounded-br-custom"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-br-custom"></div>
        </div>
      </div>

      <Container className="pb-16 text-center z-20 relative pt-32">
        <div className="flex flex-1 flex-col">
          <h1 className="text-left font-display text-7xl font-medium tracking-tight text-white sm:text-7xl">
            First Triumph
          </h1>
          <h1 className="text-left font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            Athletics
          </h1>
          <div className="mt-10 flex justify-start gap-x-6">
            <Button
              href="/volleyball"
              variant="outline"
              className="px-10 py-3 text-white"
            >
              Volleyball
            </Button>
            <Button
              href="/basketball"
              variant="outline"
              className="px-10 py-3 text-white"
            >
              Basketball
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
