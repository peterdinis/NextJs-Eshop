"use client"

import React from 'react';

interface HeroProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, title, description, buttonText }) => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-[-1]">
        <div
          className="h-full w-full bg-cover bg-center absolute"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center h-full relative">
        <h1 className="text-6xl font-bold text-white mb-4 text-shadow-md">{title}</h1>
        <p className="text-lg text-white mb-8">{description}</p>
        <a
          href="#menu"
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full uppercase tracking-wide text-shadow-md"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;