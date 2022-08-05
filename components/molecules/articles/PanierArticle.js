import Image from "next/image";
import { BigParagraph, Paragraph } from "../../atoms";

export function PanierArticle() {
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
        <BigParagraph className={"mb-2.5"}>NOM DU PRODUIT</BigParagraph>
        <Paragraph>Taille : XX</Paragraph>
        <Paragraph>Quantité : XX</Paragraph>
        <Paragraph>Flocage : Nom du gars</Paragraph>
      </div>
      <p
        onClick={() => {
          alert("Supprimer");
        }}
        className="font-lato col-start-6 cursor-pointer  underline text-white"
      >
        supprimer article
      </p>
    </>
  );
}
