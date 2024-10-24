import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import logo from "@/assets/logo.png";

export default async function Header() {
  return (
    <header className="bg-transparent top-0">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Jovi</span>
            <Image src={logo} alt="BlockApps Logo" width={40} height={40} />
        </Link>
        {/* Navigation for desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* <ModeToggle /> */}
        </div>
        {/* Navigation for mobile */}
        <div className="flex md:hidden items-center space-x-4">
          {/* <ModeToggle /> */}
        </div>
      </nav>
    </header>
  );
}
