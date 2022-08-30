import joinClasses from "../../../helpers/joinClasses";
import { HeaderLink } from "../../atoms";
import Image from "next/image";
import Link from "next/link";

export function LogHeader({ children, className }) {
  return (
    <header className={joinClasses(className, "w-full h-[172px] bg-black ")}>
      <div className="h-full max-w-[1600px] mx-[160px] flex items-center justify-between">
        <Link href="/">
          <a>
            <Image
              src="/assets/img/logo.svg"
              alt="logo"
              height="132"
              width="133"
              className="border-none"
            />
          </a>
        </Link>
        <ul className="flex gap-[100px] items-center">
          <li>
            <HeaderLink href="/">Accueil</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/produits">Nos produits</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/adhesion">Adhésion</HeaderLink>
          </li>
          <span className="w-[1px] h-[35px] bg-white"></span>
          <li>
            <HeaderLink href="/account">Mon compte</HeaderLink>
          </li>
          <li className="flex items-center gap-2.5">
            <Link href="/logout">
              <a className="flex items-center">
                <Image  src="/assets/img/logout.svg" width={20} height={18} />
              </a>
            </Link>
            <HeaderLink href="/logout">Se deconnecter</HeaderLink>
          </li>
        </ul>
        {children}
      </div>
    </header>
  );
}
