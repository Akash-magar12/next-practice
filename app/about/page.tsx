import Link from "next/link";
import React from "react";
export const metadata = {
  title: "About Us",
  description: "Learn more about our team and what we do at My Website.",
};
const About = () => {
  return (
    <div className="font-poppins">
      <h1>About Page</h1>
      <p>This is rendered by Next.js routing.</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default About;
