import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>
      <Image
        src="/nextjs-github-pages/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
