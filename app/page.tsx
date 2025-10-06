import React from "react";
import Button from "./components/Button";
import Profile from "./components/Profile";
export const metadata = {
  // title: "Home | My Website", // this becomes "Home | My Website"
  title: "Home ", // this becomes "Home | My Website"

  description: "Welcome to the home page of My Website built with Next.js.",
};
const Home = () => {
  const profile = {
    name: "Akash",
    age: 10,
    city: "Dehradun",
  };

  return (
    <main className="font-poppins">
      <h1 className="text-2xl font-bold">Hello Next.js + TypeScript 👋</h1>
      <p>Welcome to your first Next. js app.</p>
      <Button label="Click Me" />
      <Profile profile={profile} />
    </main>
  );
};

export default Home;
