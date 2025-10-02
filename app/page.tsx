import React from "react";
import Button from "./components/Button";

const Home = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold">Hello Next.js + TypeScript 👋</h1>
      <p>Welcome to your first Next.js app.</p>
      <Button label="Click Me" />
    </main>
  );
};

export default Home;
