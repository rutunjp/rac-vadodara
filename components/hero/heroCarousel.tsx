"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface ProfileCompletion {
  id: string;
  progress: number;
  userName: string;
}

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  const profileCompletions: ProfileCompletion[] = [
    { id: "1", progress: 60, userName: "Hemant" },
    { id: "2", progress: 75, userName: "Roger" },
    { id: "3", progress: 45, userName: "Sarah" },
  ];

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
  //   emblaApi.on("select", onSelect);

  //   return () => {
  //     emblaApi.off("select", onSelect);
  //   };
  // }, [emblaApi]);

  // useEffect(() => {
  //   if (emblaApi) {
  //     autoplayInterval.current = setInterval(scrollNext, 3000);

  //     return () => {
  //       if (autoplayInterval.current) {
  //         clearInterval(autoplayInterval.current);
  //       }
  //     };
  //   }
  // }, [emblaApi, scrollNext]);

  return (
    <div className="mx-auto embla w-[90%]">
      <div className="overflow-hidden embla__viewport" ref={emblaRef}>
        <div className="  touch-pan-x gap-2  ">
          <div className="relative   w-full aspect-[3/4]">
            <Image
              src="/images/hero.jpg"
              alt="Rotaract Club Event 1"
              fill
              className="object-cover rounded-3xl"
              quality={85}
            />
          </div>
          <div className="relative   w-full aspect-[3/4]">
            <Image
              src="/images/hero.jpg"
              alt="Rotaract Club Event 1"
              fill
              className="object-cover rounded-3xl"
              quality={85}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
