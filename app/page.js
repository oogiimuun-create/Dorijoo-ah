import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="">something</div>

      <Link href={"/about"}></Link>
      <Link href={"/Contact"}></Link>
      <Link href={"/experience"}></Link>
    </div>
  );
}
