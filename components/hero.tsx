import { Button } from "@/components/ui/button"; // Shadcn UI
import Image from "next/image";
import HeroImage from "@/public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="flex sm:px-16 sm:container px-4 flex-col md:flex-row items-center min-h-[80vh]">
      <div className="flex flex-col justify-center w-full md:w-1/2 ">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Unleash Your Power with Rotaract
        </h1>
        <p className="text-lg md:text-2xl mt-4">
          Join a global crew of young hustlers turning ideas into action. No
          limits, just impact.
        </p>
        <Button className="mt-6 bg-[#FF5733] w-fit hover:bg-[#FF7849] text-white font-bold text-lg py-3 px-8 rounded">
          Get In Now
        </Button>
      </div>
      <div className="w-full aspect-video rounded-3xl md:w-[70%]">
        <Image
          src={HeroImage} // Upload your phone pic to /public/photos NOW
          alt="Rotaract crew"
          className="object-contain rounded-3xl w-full h-auto"
        />
      </div>
    </section>
  );
}
