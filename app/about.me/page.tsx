"use client"

import { TypewriterEffect } from "@/components/ui/typewritter-effect";

import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/cards-carousel";
import image1 from "@/assets/twin.JPG";
import image2 from "@/assets/marsh.JPG";
import image3 from "@/assets/fam.JPG";
import image4 from "@/assets/ulti.JPG";
import image5 from "@/assets/me.JPG";

export default function aboutme() {
    const DummyContent = () => {
        return (
          <>
            {[...new Array(3).fill(1)].map((_, index) => {
              return (
                <div
                  key={"dummy-content" + index}
                  className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                >
                  <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                    <span className="font-bold text-neutral-700 dark:text-neutral-200">
                      Hi i am zenia, let me do a short introduction
                    </span>{" "}
                    I am a y2 IS student in SMU! some fun facts about me is that i have a twin, i have a cat, im someone who is family oriented and lastly, i like to play ulti!
                  </p>
                  <Image
                    src = {image5}
                    alt="a picture of me"
                    height="500"
                    width="500"
                    className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                  />
                </div>
              );
            })}
          </>
        );
      };

    const data = [
        {
          category: "My twin",
          title: "Us in japan",
          src: image1,
          content: <DummyContent />,
        },
        {
          category: "My cat",
          title: "Meet marsh",
          src: image2,
          content: <DummyContent />,
        },
        {
          category: "This is my family",
          title: "my grandma's birthday",
          src: image3,
          content: <DummyContent />,
        },
       
        {
          category: "my fav sport",
          title: "Ulti!",
          src: image4,
          content: <DummyContent />,
        },
        
      ];

    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));

      

      

    const words = [
        {
          text: "Hi!",
          className: "text-pink-500 dark:text-pink-500",
          
        },
        {
          text: "I",
          className: "text-pink-500 dark:text-pink-500",
          
        },
        {
          text: "am",
          className: "text-pink-500 dark:text-pink-500",
          
        },
        {
          text: "Zenia",
          className: "text-pink-500 dark:text-pink-500",
          
        },
        {
          text: ":)",
          className: "text-pink-500 dark:text-pink-500",
        },
      ];
    return (
      <div className="h-full">
        <div className="bg-fixed bg-no-repeat bg-center bg-cover h-2/4" style={{backgroundImage:"url('/me_bg.JPG')"}}>
            <div className="flex flex-col items-center justify-center h-[40rem]">
                <p className="text-pink-400 font-bold text-base  mb-10">
                    Get to know me!
                </p>
                <TypewriterEffect words={words} />
            </div>
        

        </div>
        <div className="bg-white">
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Some facts about me
            </h2>
            <Carousel items={cards} />
        </div>
        </div>
        </div>

      );
  }