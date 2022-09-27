import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  RoundedIcon,
  Paragraph,
  SubTitle,
  BigParagraph,
  Price,
  ReversedBorderedButton,
  Button,
} from "../../atoms";
import { SmallArticle } from "../../molecules";

export function PanierModal({ isOpen, setIsOpen = () => {}, article, modalItem, total, panierLength}) {


  return (
    <>
      {isOpen && (
        <>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="cursor-pointer z-20 bg-[#000000]/[.35] overflow-hidden fixed min-h-screen w-screen top-0 left-0 flex items-center justify-center"
          ></div>
          <div className=" z-30 fixed top-1/2 md:min-h-[366px] md:w-[778px] w-[95%] min-h-[380px]   sm:pt-[30px] pt-4 sm:px-[25px] px-3 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white opacity-100 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <SubTitle className="text-blue sm:text-subtitle text-xl ">
                L'ARTICLE A ÉTÉ AJOUTÉ AU PANIER
              </SubTitle>
              <RoundedIcon
                onClick={() => {
                  setIsOpen(false);
                }}
                className="min-h-[50px] min-w-[50px]"
                icon={"/assets/img/cross.svg"}
              />
            </div>
            <div className="sm:h-[230px] w-full mt-[25px] flex sm:flex-row flex-col gap-[15px]">
              <div className="sm:w-2/3 flex sm:border-r-2 sm:border-b-0 border-b-2 sm:pb-0 pb-4 border-red  gap-[15px]">
                <img src={article.image} className="aspect-square sm:w-auto 500:w-1/3 350:w-[150px] w-[120px] object-cover" alt={article.name} />
                <div className="flex flex-col  gap-2.5 sm:w-[183px]">
                  <BigParagraph className="uppercase text-blue">
                    {article.name}
                  </BigParagraph>
                  <Paragraph className="text-blue">Quantité : 1</Paragraph>
                  <Paragraph className="text-blue">Taille : {modalItem.size}</Paragraph>
                  {article?.flocage && modalItem.flocage && 
                  <Paragraph className="text-blue">
                    Flocage : {modalItem.flocage}
                  </Paragraph>
                  }
                  <Price className="text-blue">{article.price}€</Price>
                </div>
              </div>
              <div className="sm:w-1/3 flex sm:block flex-col ">
                <div className="sm:block flex 350:flex-row flex-col 350:items-center gap-4 sm:gap-0 ">

                <BigParagraph className="text-blue sm:mb-3 sm:text-bigger text-base min-w-max">
                  MON PANIER :
                </BigParagraph>
                <Paragraph className="text-blue sm:mb-2.5">{panierLength > 1 ? panierLength + " " + "articles" : panierLength + " " + "article"}</Paragraph>
                <div className="flex items-center  gap-2.5">
                  <Price className="text-blue">Total :</Price>
                  <Price className="text-blue">{total}€</Price>
                </div>
                </div>
                <div className="flex sm:flex-col sm:items-start 350:flex-row flex-col sm:gap-0 items-center gap-4 mt-5 mb-4 sm:mt-0 sm:mb-0 ">

                <Link href="/produits">
                  <a>
                    <ReversedBorderedButton className="sm:mt-5 sm:mb-4 sm:text-base text-sm">
                      Continuer mes achats
                    </ReversedBorderedButton>
                  </a>
                </Link>
                <Link href="/panier">
                  <a>
                    <Button className="sm:text-base text-sm">Voir mon panier</Button>
                  </a>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
