import Head from "next/head";
 import Link from "next/link";
import { Bloc, BorderedButton, Button, IntermediateParagraph, PanierButton, Paragraph, Title } from "../components/atoms";
import { Footer, Header } from "../components/molecules";
import HomeArticle from "../components/molecules/articles/HomeArticle";
import { Template } from "../components/molecules/templates/Template";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (


    <>
      <Head>
        <title>Accueil - Boutique BMX club Verrières le Buisson</title>
        <meta name="google-site-verification" content="XWvXQ0flMMlWIuwf6unw5V0t0G1CO2L73gDX3KBhzMk" />
        <link rel="canonical" href="https://boutique.vb-bmx-club.fr/produit/" />
        <meta name="description" content="Boutique du club de BMX de Verrières le Buisson. Vous pouvez trouver les différents produits du club de BMX de Verrières le Buisson, voir les détails des produits et choisir parmi une selection de taille. Tous nos produits sont adaptés pour la pratique du BMX et sont aux couleurs du club de bmx de Verrières le Buisson " key="desc" />
        <meta property="og:title" content="Boutique du club de BMX de Verrières le Buisson" />
        <meta
          property="og:description"
          content="Bienvenue sur la boutique du club de BMX de Verrières le Buisson. Vous trouverez ici tous les produits du club."
        />
        <meta
          property="og:image"
          content="https://boutique.vb-bmx-club.fr/assets/img/logo.png"
        />
      </Head>
      <Header />
      <main className={`w-full 896:pt-32 -mb-20`} style={{ minHeight: "calc(100vh - 539px)" }}>
        <div className="w-full h-full flex justify-center relative 896:static">
          <img src="/assets/img/homeIMG.png" className=" h-[250px] object-cover block absolute w-full 896:hidden" alt="home-img" />

          <div className="max-w-[1600px] w-full  flex flex-col flex-col-reverse 896:grid grid-cols-12 xl:mx-0 mx-4  896:gap-[50px] gap-8">
            <PanierButton className="!top-[275px] 896:!top-[222px]" />
            <div className="xl:col-start-2 xl:col-span-5 col-span-7 p-4 mt-[340px] 896:mt-0">
              <h1 className="font-josefin font-bold lg:text-title text-white text-center lg:mb-[50px] mb-7">Boutique du Club de BMX de Verrières le Buisson</h1>
              <div className="flex items-center gap-4">
                <div className="w-[20px] h-[65px] bg-red   "></div>
                <Paragraph className={"leading-8"}>Bienvenue sur la boutique du club. Ici vous pourrez commander les produits du club simplement et rapidement ! </Paragraph>
              </div>
              <div className="flex 500:flex-row flex-col 500:gap-0 gap-10 justify-around items-center lg:mt-[70px] mt-12">
                <Link href="https://vb-bmx-club.fr">
                  <a>
                    <BorderedButton>Visiter le site du club</BorderedButton>
                  </a>
                </Link>
                <Link href="/produits">
                  <a>
                    <Button>Commencer mes achats</Button>
                  </a>
                </Link>
              </div>
            </div>
            <img src="/assets/img/homeIMG.png" className="xl:col-span-4 col-span-5 xl:col-start-8 object-cover col-start-8 hidden 896:block" alt="home-img" />
          </div>
        </div>
        <div className="w-full flex mt-10 500:mt-[120px] 1400:flex-row flex-col items-end justify-center relative">
          <div className="h-full w-full hidden absolute 1400:grid grid-cols-12 max-w-[1600px] ">
            <div className="col-span-9 h-full hidden 1400:block pt-[30px] rounded-tr-[40px]">
              <p className="font-josefin  font-bold text-blue text-subtitle text-center">14 produits à l'image du club !</p>
              <div className="flex w-full h-full gap-28 items-end mt-[50px] 1400:mt-0 1650:pl-0 pl-[50px]">
                <HomeArticle bgColor="red">MAILLOT VERRIÈRES BMX CLUB saison 2022-2023</HomeArticle>
                <HomeArticle bgColor="blue">CASQUETTE VERRIÈRES BMX CLUB</HomeArticle>
                <HomeArticle bgColor="red">PANTALON LEAD RACEWEAR VERRIÈRES BMX CLUB saison 2022-2023
                </HomeArticle>
              </div>
            </div>
          </div>
          <div className="hidden absolute 1400:grid grid-cols-12 w-full bottom-[90px] max-w-[1600px] gap-[50px]">
            <div className="col-span-3 col-start-10 z-10 1400:col-start-9 h-[130px] bg-blue flex items-center justify-center">
              <IntermediateParagraph className={"text-center"}>Nous contacter : <br /> contact@vb-bmx-club.fr</IntermediateParagraph>
            </div>
          </div>
          <div className="1400:w-[73%] w-full lg:!h-[502px] bg-[#E4E4E4] flex flex-col items-center 1400:rounded-tr-[40px] pt-[30px]">
            <div className=" h-full 1400:bg-[#E4E4E4] w-full lg:w-auto lg:pt-[30px] lg:pb-0 pb-28 1400:rounded-tr-[40px]">
              <p className="font-josefin block 1400:hidden font-bold text-blue text-subtitle text-center">14 produits à l'image du club !</p>
              <div className="flex lg:flex-row flex-col w-full h-full gap-16 lg:gap-28  1400:hidden lg:items-end mt-[25px] 1400:mt-0 1650:pl-0 1400:pl-[50px]">
                <HomeArticle bgColor="red">MAILLOT VERRIÈRES BMX CLUB saison 2022-2023</HomeArticle>
                <HomeArticle bgColor="blue">CASQUETTE VERRIÈRES BMX CLUB</HomeArticle>
                <HomeArticle bgColor="red">PANTALON LEAD RACEWEAR VERRIÈRES BMX CLUB saison 2022-2023
                </HomeArticle>
              </div>
            </div>
          </div>
          <div className="1400:w-[27%] z-10 1400:z-0 w-full bg-red 1400:h-[341px] h-[120px]">
            <div className="block 1400:hidden w-full bottom-[90px]  max-w-[1600px] gap-[50px]">
              <div className="col-span-3 col-start-10 z-10 1400:col-start-9 h-[130px] bg-blue flex items-center justify-center">
                <IntermediateParagraph className={"text-center"}>Nous contacter : <br /> contact@vb-bmx-club.fr</IntermediateParagraph>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
