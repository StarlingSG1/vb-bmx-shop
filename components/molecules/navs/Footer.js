import Image from "next/image";
import Link from "next/link";
import { Paragraph, HeaderLink, TextLink } from "../../atoms";

export function Footer() {
  return (
    <footer className="md:h-[367px] relative md:px-16 px-4 flex flex-col items-center bg-black mt-20">
      <div className=" md:h-[300px] max-w-[1600px] w-full  flex md:flex-row flex-col items-center justify-between md:pt-0 pt-10">
        <div className="h-full w-1/3 flex items-center md:justify-start justify-center  ">
          <Link href="/">
            <a>
              <Image
                src="/assets/img/logo.svg"
                alt="logo"
                height="150"
                width="150"
                className="border-none"
              />
            </a>
          </Link>
        </div>
        <div className="md:h-[250px] md:py-0 py-14 md:border-x md:border-white lg:w-1/3 md:w-1/2 flex md:flex-col sm:flex-row flex-col justify-center items-center gap-[40px]">
          <a href="https://vb-bmx-club.fr" target="_blank" rel="noreferrer" className="textLink 350:text-left text-center">Notre site</a>
          <HeaderLink href="/conditions-generales-de-vente">Conditions générales de vente</HeaderLink>
          <HeaderLink href="/politique-de-confidentialite">Mentions légales</HeaderLink>
        </div>
        <div className="h-full md:w-1/3 flex sm:items-center items-end  justify-end lg:gap-40 gap-16">
            <a href="https://www.facebook.com/profile.php?id=100011345531645" rel="noreferrer" target="_blank">
              <Image
                src="/assets/img/facebook.svg"
                alt="logo"
                height="50"
                width="50"
                className="border-none"
              />
            </a>
            <a href="https://www.instagram.com/vbbmxclub/" rel="noreferrer" target="_blank">
              <Image
                src="/assets/img/instagram.svg"
                alt="logo"
                height="50"
                width="50"
                className="border-none"
              />
            </a>
        </div>
      </div>
      <div className="w-full md:my-0 my-5 max-w-[1600px]">
        <Paragraph>
          Made by <TextLink href="mailto:barriere.jeremie@gmail.com">Jérémie Barrière</TextLink>
        </Paragraph>
      </div>
    </footer>
  );
}
