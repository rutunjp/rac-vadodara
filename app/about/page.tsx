"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "/images/hero.jpg", // Replace with your image paths
  "/images/hero.jpg",
  "/images/hero.jpg",
  // Add more images as needed
];

export default function AboutPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us | Rotaract Club</title>
        <meta
          name="description"
          content="Learn about the mission, vision, and values of our Rotaract Club. Discover how we serve our community and make a difference."
        />
      </Head>

      <main className="container mx-auto py-8 px-4 max-w-3xl">
        {/* Auto Sliding Photos */}
        <div className="relative mb-6 rounded-2xl overflow-hidden shadow-md">
          <Image
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            width={1200} // Adjust as needed
            height={600} // Adjust as needed
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Club Intro */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6 p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Rotaract Club of Vadodara
          </h1>
          <p className="text-gray-700 mb-4">
            The Rotaract Club of Vadodara is a dynamic group of young leaders
            dedicated to making a positive impact in our community. We are part
            of Rotary International, a global network of service-minded
            individuals.
          </p>
          <p className="text-gray-700 mb-4">
            Through various service projects, professional development
            opportunities, and social events, we strive to empower our members
            and contribute to the betterment of society. Join us in our mission
            to create lasting change and build a brighter future for Vadodara.
          </p>
          <p className="text-gray-700">
            We are passionate about service, leadership, and fellowship.
          </p>
        </div>

        {/* Full Size Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/hero.jpg" // Replace with your full-size logo
            alt="Rotaract Club Full Logo"
            width={300} // Adjust as needed
            height={150} // Adjust as needed
            className="object-contain"
          />
        </div>

        {/* More Content (Mission, Vision, etc.) */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To provide an opportunity for young men and women to enhance the
            knowledge and skills that will assist them in personal development,
            to address the physical and social needs of their communities, and
            to promote better relations between all people worldwide through a
            framework of friendship and service.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            To be a leading force for positive change in Vadodara, empowering
            young leaders to make a lasting impact through service and
            collaboration.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>About Rotaract Club of Vadodara | {new Date().getFullYear()}</p>
          <p className="mt-1">
            <Link href="/" className="text-[#FF5733] hover:underline">
              Back to Home
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
