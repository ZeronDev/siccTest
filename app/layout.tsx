import Image from 'next/image';
import Link from 'next/link';
import menu from "public/menu.png";
import about from "public/about.png";
import tw from "tailwind-styled-components";
import "tailwindcss/tailwind.css";

export const metadata = {
  title: 'SICC 웹사이트',
  description: 'Developed by SICC',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.png"></link>
      <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  )
}

