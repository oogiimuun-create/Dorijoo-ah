import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full min-h-screen py-20 px-80">
      <div className="text-[40px] ">
        <h3 className="font-bold">Hi, I’m Hem1x 👋</h3>
        <div className="grid grid-cols-2 gap-50">
          <p className="text-[32px]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating
            <br />
            (and occasionally designing) exceptional digital experiences that
            are
            <br />
            fast, accessible, visually appealing, and responsive. Even though I
            have
            <br />
            been creating web applications for over 7 years, I still love it as
            if
            <br />
            it was something new.
          </p>
          <Image width={400} height={400} alt="lol" src="/image/profile.jpg" />
        </div>
      </div>

      <Link href={"/about"}></Link>
      <Link href={"/Contact"}></Link>
      <Link href={"/experience"}></Link>
    </div>
  );
}
