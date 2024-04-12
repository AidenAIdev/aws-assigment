import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
"use client";
import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
const App = () => {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Header />
    <ButtonGradient />
    <Hero />
    <Features />
    </div>
    </>

  );  
};
export default App;
