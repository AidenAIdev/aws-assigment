import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
"use client";
import React from "react";
import Hero from "./components/Hero";
import Howtouse from "./components/Howtouse";
const App = () => {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Header />
    <ButtonGradient />
    <Hero />
    <Howtouse />
    </div>
    </>

  );  
};
export default App;
