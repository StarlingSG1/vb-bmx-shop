import Image from "next/image";
import { Paragraph } from "../../atoms";

export function SmallArticle() {
  return (
    <div className="flex h-[190px] gap-5">
      <Image src="/assets/img/product1.png" height={190} width={150} />
      <div className="flex flex-col gap-1.5 w-[183px]">
        <Paragraph className="text-blue">Nom du produit</Paragraph>
        <Paragraph className="text-blue">Quantité : X</Paragraph>
        <Paragraph className="text-blue">Taille : X</Paragraph>
        <Paragraph className="text-blue">Prix : X</Paragraph>
        <Paragraph className="text-blue">
          Flocage : NomDuGars7
        </Paragraph>
      </div>
    </div>
  );
}
