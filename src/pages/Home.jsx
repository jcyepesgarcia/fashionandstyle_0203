import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Announcement />
      <Header />
      <Hero />
      <main>
        <Categories />
      </main>
    </>
  );
}

export default Home;
