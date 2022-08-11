import Image from "next/image";
import Link from "next/link";
import { Paragraph, HeaderLink, TextLink } from "../../atoms";

export function Footer(){
    return (
        <footer className="h-[367px]  bg-black mt-20">
            <div className="mx-[160px] h-[300px] max-w-[1600px] flex items-center justify-between">
                <div className="h-full w-1/3 flex items-center">

            <Link href="/">
                <a>
                    <Image src="/assets/img/logo.svg" alt="logo" height="150" width="150" className="border-none"  />
                </a>
            </Link>
                </div>
            <div className="h-[250px] border-x border-white w-1/3 flex flex-col justify-center items-center gap-[65px]">
                <HeaderLink href="/">Notre site</HeaderLink>
                <HeaderLink href="/">Conditions générales d’utilisation</HeaderLink>
                <HeaderLink href="/">Mentions légales</HeaderLink>
            </div>
            <div className="h-full w-1/3 flex items-center  justify-end gap-40">
            <Link href="/">
                <a>
                    <Image src="/assets/img/facebook.svg" alt="logo" height="50" width="50" className="border-none"  />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <Image src="/assets/img/instagram.svg" alt="logo" height="50" width="50" className="border-none"  />
                </a>
            </Link>
                
            </div>
            </div>
            <Paragraph className="mx-[160px]">Made by <TextLink>Jérémie Barrière</TextLink></Paragraph>
        </footer>
    )
}