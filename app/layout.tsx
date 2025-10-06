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
  title: {
    default: "My Website", // Default if no page title is given
    template: "%s | My Website", // Adds " | My Website" to every page title
  },
  icons: {
    icon: "./globe.svg",
  },
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
