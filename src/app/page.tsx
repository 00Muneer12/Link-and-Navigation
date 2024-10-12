'use client';
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const route = useRouter()
  return(
    <div>
      <h1>Welcome to my Navbar Page</h1>

      <ul>
        <li><Link href='about'>About</Link></li>
        <li><Link href='header'>Header</Link></li>
        <li><Link href='navbar'>Navbar</Link></li>
        <li><Link href='footer'>Footer</Link></li>
      </ul>

        <ul>
      <li><button className="p-5 bg-green-500" onClick={() => route.push('/about')}> About page</button></li>
      <li><button className="p-5 bg-green-500" onClick={() => route.push('/header')}> Header page</button></li>
      <li><button className="p-5 bg-green-500" onClick={() => route.push('/navbar')}> Navbar page</button></li>
      <li><button className="p-5 bg-green-500" onClick={() => route.push('/footer')}> Footer page</button></li>
      </ul>
    </div>

  )
}


