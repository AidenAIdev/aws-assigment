import Section from './Section'
import React from 'react'
import { aiagencySymbol, robot, curve } from '../assets'
import Button from './Button'
function Hero() {
  return (
    <Section
    className="pt-[12rem] mt-[5.25]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >
        <div
        className='container relative'
        >
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
                <Button href='/subscribe' white
                >Subscribete Ya</Button>
            </div>
            <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
                <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
                    <div className='relative bg-n-8 rounded-[1rem]'>
                        <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]'/>
                        <div>
                            <img src={robot} className='w-full' width={400} height={400} alt='robot'/>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </Section>
  )
}

export default Hero