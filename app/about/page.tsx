import Link from "next/link";
import React from "react";
export const metadata = {
  title: "About Page",
  description: "Learn more about our company on the About page.",
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
