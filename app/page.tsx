"use client"; 
import React, { useEffect, useState } from 'react';
import { Carousel, Card } from "@/components/ui/cards-carousel";
import Image from 'next/image';



export default function Home() {
  const words: string[]= ["moodeng", "pesto", "hua hua", "neil"]
  const backgroundImages = ["/moodeng.jpg", "pesto.jpg", "huahua.jpg", "neil.jpg"]; 
  const [currentIndex, setCurrentIndex] = useState(0); // Manage the index for both background and words
  const audioRef = React.useRef<HTMLAudioElement | null>(null); // Reference for audio



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
                  Find out more about the knights of the rotund table
                </span>{" "}
                The "Knights of the Rotund Table" is a viral TikTok trend that features adorable, rotund animals represented as knights gathered at a mythical round table, similar to King Arthur's legendary knights. The concept, spearheaded by TikTok user Indy, @indipine, began as a fun way to celebrate chubby animals and quickly gained popularity. Each "knight" is usually a cute or plump animal, often depicted in regalia.
                The "Knights" started with an online competition to determine who was cuter: Moo Deng or Pesto the penguin.
                Indy declared both, along with Hua Hua, who was already famous as a panda who was chubbier than most, the Knights of the Rotund Table.
                Given that the actual Knights of the Round Table had many members, she decided to add more members (25) via internet votes and created little comic drawings of each. She's also linking to the sanctuaries where some of the "knights" are located so people can donate to support their favourite animals, including Vancouver's Biscuits.
              </p>
              <Image
                src="/knights_table.jpeg"
                alt="knights of the rotund table"
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
      category: "Moodeng!",
      title: "Moodeng, the sephora princess",
      src: "/moodeng_card.jpg",
      content: <DummyContent />,
    },
    {
      category: "HuaHua",
      title: "Hua Hua the onigiri panda",
      src: "/huahua_card.jpg",
      content: <DummyContent />,
    },
    {
      category: "Pesto!",
      title: "Pesto the gigantic penguin!",
      src: "/pesto_card.png",
      content: <DummyContent />,
    },
   
    {
      category: "Neil!",
      title: "the chaotic seal",
      src: "/neil_card.jpeg",
      content: <DummyContent />,
    },
    {
      category: "luna",
      title: "Luna the rescue otter",
      src: "/luna_card.jpeg",
      content: <DummyContent />,
    },
    {
      category: "Baby white rhino",
      title: "newly born white rhino from dubai!",
      src: "/rhino.jpeg",
      content: <DummyContent />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));


  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cycle through the images and words by updating the index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change both image and words every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to play audio
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  
  return (
    <div>
      <div className="bg-fixed bg-no-repeat bg-center bg-cover transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }} >
          <div className="flex flex-col justify-center h-[calc(100vh-60px)] items-center">
          <p className="font-bold text-5xl text-center">Don't do drugs, <span className="text-red-300">{words[currentIndex]}</span> doesnt do it </p>
          <p className="text-base text-center">you shouldnt too</p>
          </div>


          <div className="outline md:outline-black-400 text-md block bg-red-300 text-center">
            Moodeng doesnt take drugs, so you shouldnt too!
          </div>


          <div className="bg-red-100 p-2.5 h-72 grid gap-4 grid-cols-2">
            <p className="font-bold underline underline-offset-1 text-3xl">
              1. Why you should NOT take drugs
            </p>
            <p className="mx-3 text-2xl">
              1. meow, they ruin your mental health, meow.
              <br></br>
              2. if youre on drugs you cant see the cat
              <br></br>
              <br></br>
            </p>

            <div className="w-56 mx-3">
            <img 
              src="/olli-the-polite-cat.jpg" 
              alt="Olli the Polite Cat" 
              onClick={playAudio} 
              className="cursor-pointer" // Change cursor to pointer to indicate clickable
            />
              </div>
          </div>

          <div className="bg-lime-100 p-2.5 h-72 grid gap-4 grid-cols-2">
          <p className="font-bold underline underline-offset-1 text-3xl">
              1. Why you should take drugs
            </p>
            <p className="mx-3 text-2xl">
              1. Dont
              <br></br>
              2. moodeng will bite you
              <br></br>
              <br></br>
            </p>
              <div className="animate-bounce w-56 mx-3">
                <img src="/download.jpeg"/>
              </div>

          </div>

          <audio ref={audioRef} src="/curteis.mp3" preload="auto"></audio>
      </div>



      <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know the table of knights
      </h2>
      <Carousel items={cards} />
      </div>

    </div>
    
    );
  }

