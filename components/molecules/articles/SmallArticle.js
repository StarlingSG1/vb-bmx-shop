import Image from "next/image";
import Link from "next/link";
import { Paragraph } from "../../atoms";

export function SmallArticle({article}) {



  return (
    <div className="flex md:items-start items-center md:flex-row flex-col md:h-[190px] 500:gap-5 gap-2">
      <Link href={"/produits/"+article?.Product?.slug}>
      <a>
      <img alt={article?.Product?.image} src={article?.Product?.image} className="object-cover aspect-square 500:h-[190px] 500:w-[150px] w-full"  />
      </a>
      </Link>
      <div className="flex flex-col md:items-start items-center gap-1.5 500:w-[183px]">
        <Paragraph className="text-blue 500:text-base text-sm font-bold ">{article?.Product?.name}</Paragraph>
        <Paragraph className="text-blue 500:text-base text-sm ">Quantité : {article?.quantity}</Paragraph>
        <Paragraph className="text-blue 500:text-base text-sm ">Taille : {article?.size}</Paragraph>
        <Paragraph className="text-blue 500:text-base text-sm ">Prix : {article?.quantity * article?.Product?.price}€</Paragraph>
        {article?.flocage !== null && (
          <Paragraph className="text-blue 500:text-base text-sm ">Flocage : {article?.flocage}</Paragraph>
        )}
      </div>
    </div>
  );
}
