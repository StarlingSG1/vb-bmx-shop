  import joinClasses from "../../../helpers/joinClasses";
import { HeaderLink } from "../../atoms";
 import Link from "next/link";
import { useUserContext } from "../../../context";
import { useState } from "react";

export function Header({ children, className }) {
  const { status, user } = useUserContext();
  const [menuToggle, setMenuToggle] = useState(false);



  return (
    <>
      <header className={joinClasses(className, "w-full h-[172px] bg-black flex justify-center")}>
        <div className="h-full max-w-[1600px]  mx-4 w-full flex items-center justify-between">
          <Link href="/">
            <a>
              <img
                src="/assets/img/logo.svg"
                alt="logo"
                height="132"
                width="133"
                className="border-none"
              />
            </a>
          </Link>
          <svg width="40" onClick={() => { setMenuToggle(true) }} className="md:hidden mr-9" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 24.5H26.5M5.5 16.5H26.5M5.5 8.5H26.5" stroke="#F4F5F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <ul className=" 2xl:gap-[75px] xl:gap-[55px] lg:gap-[40px] md:gap-2.5 md:flex hidden items-center">
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
                      <img
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
      <div className={`md:hidden h-screen w-screen bg-blue fixed top-0 z-20 duration-200 flex items-center justify-center ${menuToggle ? "left-0 " : "-translate-x-full"}`}>
        <svg className="cursor-pointer absolute right-14 top-[72px]" onClick={() => { setMenuToggle(false) }} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M25.5071 2.87005C25.6633 2.71412 25.7871 2.52898 25.8717 2.32518C25.9563 2.12138 25.9999 1.90292 26 1.68227C26.0001 1.46162 25.9568 1.24311 25.8725 1.0392C25.7882 0.835301 25.6645 0.65 25.5086 0.493883C25.3527 0.337765 25.1675 0.213889 24.9637 0.129326C24.7599 0.0447624 24.5415 0.00116838 24.3208 0.00103276C24.1002 0.000897146 23.8817 0.0442226 23.6778 0.128535C23.4739 0.212848 23.2886 0.336497 23.1324 0.492422L12.9998 10.6251L2.87005 0.492422C2.55476 0.177129 2.12713 -3.32215e-09 1.68124 0C1.23534 3.32215e-09 0.807715 0.177129 0.492422 0.492422C0.177129 0.807715 3.32215e-09 1.23534 0 1.68124C-3.32215e-09 2.12713 0.177129 2.55476 0.492422 2.87005L10.6251 12.9998L0.492422 23.1295C0.336305 23.2856 0.212466 23.471 0.127976 23.675C0.0434862 23.8789 0 24.0976 0 24.3183C0 24.5391 0.0434862 24.7577 0.127976 24.9617C0.212466 25.1657 0.336305 25.351 0.492422 25.5071C0.807715 25.8224 1.23534 25.9996 1.68124 25.9996C1.90202 25.9996 2.12064 25.9561 2.32462 25.8716C2.52859 25.7871 2.71393 25.6633 2.87005 25.5071L12.9998 15.3745L23.1324 25.5071C23.4477 25.8221 23.8752 25.9988 24.3208 25.9985C24.7665 25.9983 25.1937 25.821 25.5086 25.5057C25.8235 25.1904 26.0003 24.7629 26 24.3173C25.9997 23.8717 25.8224 23.4444 25.5071 23.1295L15.3745 12.9998L25.5071 2.87005Z" fill="#F4F5F5" />
        </svg>
        <ul className=" gap-10 flex flex-col items-center">
            <li>
              <HeaderLink className={"!text-xl"} href="/">Accueil</HeaderLink>
            </li>
            <li>
              <HeaderLink className={"!text-xl"} href="/produits">Nos produits</HeaderLink>
            </li>
            <li>
              <HeaderLink className={"!text-xl"} href="/adhesion">Adhésion</HeaderLink>
            </li>
            <span className="w-[80px] h-[1px] bg-white"></span>
            {status !== "connected" ? (
              <>
                <li>
                  <HeaderLink className={"!text-xl"} href="/login">Connexion</HeaderLink>
                </li>
                <li>
                  <HeaderLink className={"!text-xl"} href="/register">Inscription</HeaderLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <HeaderLink className={"!text-xl"} href="/account">Mon compte</HeaderLink>
                </li>
                {(user?.role == "ADMIN" || user?.role == "SUPERADMIN") && (
                  <li>
                    <HeaderLink className={"!text-xl"} href="/admin">Espace Admin</HeaderLink>
                  </li>
                )}
                <li className="flex items-center gap-2.5">
                  <Link href="/logout">
                    <a className="flex items-center">
                      <img
                        src="/assets/img/logout.svg"
                        width={20}
                        height={18}
                        alt="logout"
                      />
                    </a>
                  </Link>
                  <HeaderLink className="!text-xl" href="/logout">Se deconnecter</HeaderLink>
                </li>
              </>
            )}
          </ul>

      </div>
    </>

  );
}
