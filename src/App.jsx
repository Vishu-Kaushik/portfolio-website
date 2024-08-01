import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar></Navbar>
      <Hero></Hero>
      <Contact></Contact>
    </main>
  );
};

export default App;
