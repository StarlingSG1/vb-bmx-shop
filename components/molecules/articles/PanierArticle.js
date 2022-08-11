import Image from "next/image";
import { useEffect } from "react";
import { BigParagraph, Paragraph, Price } from "../../atoms";

export function PanierArticle({article, panierContent, setPanierContent = () => {}}) {

  const removeOneFromArray =  () => {
    const newPanierContent = panierContent.filter(item => item.id !== article.id);
    setPanierContent(newPanierContent);
    localStorage.setItem("vb-bmx-panier", JSON.stringify(newPanierContent));
  }

  return (
    <>
      <div className="relative aspect-square mb-6 col-span-2 mr-[15px]">
        <Image
          src="/assets/img/product1.png"
          className="absolute object-contain "
          layout="fill"
        />
      </div>
      <div className={"col-span-2 flex flex-col gap-5"}>
        <BigParagraph className={"mb-2.5"}>{article.name}</BigParagraph>
        <Paragraph>Taille : XX</Paragraph>
        <Paragraph>Quantité : XX</Paragraph>
        <Paragraph>Flocage : Nom du gars</Paragraph>
        <Price>{article.price}€</Price>

      </div>
      <p
        onClick={() => {
          removeOneFromArray();
        }}
        className="font-lato col-start-6 cursor-pointer  underline text-white"
      >
        supprimer article
      </p>
    </>
  );
}
