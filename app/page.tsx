"use client"; 
import React, { useEffect, useState } from 'react';


export default function Home() {
  const words: string[]= ["moodeng", "pesto", "hua hua", "neil"]
  const backgroundImages = ["/moodeng.jpg", "pesto.jpg", "huahua.jpg", "neil.jpg"]; 
  const [currentIndex, setCurrentIndex] = useState(0); // Manage the index for both background and words
  const audioRef = React.useRef<HTMLAudioElement | null>(null); // Reference for audio

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
    </div>
    );
  }

