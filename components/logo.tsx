import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold">Taskify</span>
      </div>
    </Link>
  )
};
