import joinClasses from "../../../helpers/joinClasses";
import { HeaderLink } from "../../atoms";
import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "../../../context";

export function Header({ children, className }) {
  const { status, user } = useUserContext();

  return (
    <header className={joinClasses(className, "w-full h-[172px] bg-black flex justify-center")}>
      <div className="h-full max-w-[1600px]  md:mx-16 mx-5 w-full flex items-center justify-between">
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
        <ul className=" 2xl:gap-[75px] xl:gap-[55px] lg:gap-[40px] md:gap-2.5 sm:flex hidden items-center">
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
          {status !== "connected" ? (
            <>
              <li>
                <HeaderLink href="/login">Connexion</HeaderLink>
              </li>
              <li>
                <HeaderLink href="/register">Inscription</HeaderLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <HeaderLink href="/account">Mon compte</HeaderLink>
              </li>
              {(user?.role == "ADMIN" || user?.role == "SUPERADMIN") && (
                <li>
                  <HeaderLink href="/admin">Espace Admin</HeaderLink>
                </li>
              )}
              <li className="flex items-center gap-2.5">
                <Link href="/logout">
                  <a className="flex items-center">
                    <Image
                      src="/assets/img/logout.svg"
                      width={20}
                      height={18}
                      alt="logout"
                    />
                  </a>
                </Link>
                <HeaderLink href="/logout">Se deconnecter</HeaderLink>
              </li>
            </>
          )}
        </ul>
        {children}
      </div>
    </header>
    
  );
}
