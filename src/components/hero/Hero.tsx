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
      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          <a
            href="#menu"
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full uppercase tracking-wide"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;