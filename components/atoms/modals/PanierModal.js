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
          <div className=" z-30 fixed top-1/2 md:min-h-[366px] md:w-[778px] w-full min-h-[380px]   pt-[30px] px-[25px] left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white opacity-100 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <SubTitle className="text-blue ">
                L'ARTICLE A ÉTÉ AJOUTÉ AU PANIER
              </SubTitle>
              <RoundedIcon
                onClick={() => {
                  setIsOpen(false);
                }}
                icon={"/assets/img/cross.svg"}
              />
            </div>
            <div className="h-[230px] w-full mt-[25px] flex gap-[15px]">
              <div className="w-2/3 flex border-r-2 border-red  gap-[15px]">
                <div className="aspect-square  md:w-auto  relative">
                  <Image src={article.image} layout="fill" alt={article.name} />
                </div>
                <div className="flex flex-col  gap-2.5 w-[183px]">
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
              <div className="w-1/3 ">
                <BigParagraph className="text-blue mb-3">
                  MON PANIER :
                </BigParagraph>
                <Paragraph className="text-blue mb-2.5">{panierLength > 1 ? panierLength + " " + "articles" : panierLength + " " + "article"}</Paragraph>
                <div className="flex items-center  gap-2.5">
                  <Price className="text-blue">Total :</Price>
                  <Price className="text-blue">{total}€</Price>
                </div>
                <Link href="/produits">
                  <a>
                    <ReversedBorderedButton className="mt-5 mb-4">
                      Continuer mes achats
                    </ReversedBorderedButton>
                  </a>
                </Link>
                <Link href="/panier">
                  <a>
                    <Button>Voir mon panier</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
