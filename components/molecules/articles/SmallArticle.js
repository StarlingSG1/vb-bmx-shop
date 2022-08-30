import Image from "next/image";
import Link from "next/link";
import { Paragraph } from "../../atoms";

export function SmallArticle({article}) {



  return (
    <div className="flex h-[190px] gap-5">
      <Link href={"/produits/"+article.Product.slug}>
      <a>
      <Image src={article.Product.image} objectFit={"cover"} height={190} width={150} />
      </a>
      </Link>
      <div className="flex flex-col gap-1.5 w-[183px]">
        <Paragraph className="text-blue">{article.Product.name}</Paragraph>
        <Paragraph className="text-blue">Quantité : {article.quantity}</Paragraph>
        <Paragraph className="text-blue">Taille : {article.size}</Paragraph>
        <Paragraph className="text-blue">Prix : {article.quantity * article.Product.price}€</Paragraph>
        {article?.flocage !== null && (
          <Paragraph className="text-blue">Flocage : {article.flocage}</Paragraph>
        )}
      </div>
    </div>
  );
}
