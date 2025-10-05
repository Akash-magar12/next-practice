import React from "react";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Imaged from "./components/Imaged";
import Link from "next/link";


const Home = () => {
  const profile = {
    name: "Akash",
    age: 10,
    city: "Dehradun",
  };

  return (
    <main className="font-poppins">
      <h1 className="text-2xl font-bold">Hello Next.js + TypeScript 👋</h1>
      <Link href="/about">About</Link>
      <p>Welcome to your first Next. js app.</p>
      <Button label="Click Me" />
      <Profile profile={profile} />
      <Imaged />
    </main>
  );
};

export default Home;
