"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Box } from "@mui/material/";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Hero() {
  const images = ["/hero-1.png", "/hero-2.png", "/hero-3.png"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000); // Change image every 5000 milliseconds (5 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <Box
      className="relative"
      sx={{
        height: "90vh",
        backgroundColor: "white",
      }}
    >
      <Image
        src={images[currentImage]}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
        className="z-0"
        style={{
          borderRadius: "0 0 80px 0",
          backgroundColor: "white",
          paddingRight: 30,
        }}
      />
      <div className="absolute inset-0  z-10" />{" "}
      {/* Black transparent overlay */}
      <Container className="pb-16 text-center lg:pt-32 z-20 relative">
        <Box
          sx={{
            mt: 15,
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "fle-start",
            flexDirection: "column",
          }}
        >
          <h1 className="text-left font-display text-7xl font-medium tracking-tight text-white sm:text-7xl">
            First Triumph
          </h1>
          <h1 className="text-left font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            Athletics
          </h1>
          <div className="mt-10 flex justify-start gap-x-6">
            <Button href="/volleyball">Volleyball</Button>
            <Button href="/basketball">Basketball</Button>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
