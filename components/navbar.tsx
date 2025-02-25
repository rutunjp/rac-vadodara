// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-[#1a2a6c] text-white p-4 flex justify-between">
      <Link href="/" className="text-2xl font-bold">
        Rotaract Vadodara
      </Link>
      <div className="space-x-6">
        <Link href="/" className="hover:text-[#FF5733]">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#FF5733]">
          About
        </Link>
        <Link href="/join" className="hover:text-[#FF5733]">
          Join
        </Link>
      </div>
    </nav>
  );
}
