import tw from "tailwind-styled-components";
import "tailwindcss/tailwind.css";
import Image from 'next/image';
import menu from "public/menu.png";
import about from "public/about.png";
import Link from "next/link";

export default function App() {
  return (
    <div className="flex justify-between">
          <nav className="border-box border-0 w-20 h-screen bg-gradient-to-r from-salesio to-blue-400" >
          <Image src={menu} alt="menu icon" width={90} height={90}/>
          <Link href="/about"><Image src={about} alt="about icon" width={90} height={90}/></Link>
        </nav>

      <p>asdf</p>
      
      
    </div>
  )
}