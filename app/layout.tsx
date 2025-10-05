import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

const open = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Home page",
  description: "This is the home page of our Next.js website.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open.variable}  ${poppins.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
