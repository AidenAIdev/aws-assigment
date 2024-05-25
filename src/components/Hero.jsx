import Section from './Section'
import React from 'react'
import { aiagencySymbol, robot, curve, heroBackground } from '../assets'
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import { heroIcons } from "../constants";
import Button from './Button'
function Hero() {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
        <div className="container relative" ref={parallaxRef}>
            <div
            className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]'
            >
                <h1 className='h1 mb-6'>
                    Explora las nuevas posibilidades del marketing con {"  "}
                    <span className='inline-block relative'>
                        AiAGENCY
                        <img src={curve} className='absolute  left-0 w-full xl:mt-1' width={624} height={28} alt='curve'/>

                    </span>
                </h1>
                <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
                    Crea todo lo que te imaginas y mas con AI agency
                </p>
                <Button href='https://www.aiagency.app/' white
                >Subscribete Ya</Button>
            </div>
            <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
                <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
                    <div className='relative bg-n-8 rounded-[1rem]'>
                        <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]'/>
                        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                        </div>

                    </div>
                    <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-full xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                    <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Gestiona miles de proyectos"
                  />
                </ScrollParallax>
                </div>
                <div className="absolute -top-[62%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[52%] md:w-[138%] lg:-top-[115%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
                <BackgroundCircles />
            </div>
            <BottomLine />

        </div>
    </Section>
  )
}

export default Hero