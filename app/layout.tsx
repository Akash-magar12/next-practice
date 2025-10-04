import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";

const open = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open.className}  ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
