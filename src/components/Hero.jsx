import Section from './Section'
import React from 'react'
import { curve } from '../assets'
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
                    Explora las posibilidades del marketing con Inteligencia Artificial
                    <hr/>
                    <span className='inline-block relative'>
                        AiAGENCY
                        <img src={curve} className='absolute top-full left-0 w-full xl:mt-2' width={624} height={28} alt='curve'/>

                    </span>
                </h1>
                <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
                    Crea todo lo que te imaginas y mas con AI agency
                </p>
                <Button>Subscribete Ya</Button>
            </div>
        </div>
    </Section>
  )
}

export default Hero