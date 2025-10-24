import Link from "next/link";

export default function Header() {
  return (
    <div className="w-[100vw] h-[100px] bg-white text-black items-center flex">
      <div className="ml-[1500px] gap-[100px] flex">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/experience">Experience</Link>
      </div>
    </div>
  );
}
