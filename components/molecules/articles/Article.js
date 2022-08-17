import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "../../../context";
import { BigParagraph, Paragraph } from "../../atoms";

export function Article({ id, name, description, price, image }) {

  const {  setArticleId } = useUserContext();
  let slug = name.toLowerCase().replace(/ /g, "-");
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  

  return (
    <Link href={{pathname: `/produits/${slug}`, query: {id: id}}} as={`/produits/${slug}`}>
      <a onClick={() => {setArticleId(id)}}>
        <div className="flex flex-col gap-2.5 cursor-pointer ">
          <div className="relative w-full   aspect-square">
            <Image src={image} objectFit="cover" layout="fill" />
          </div>
          <div className="flex justify-between">
            <BigParagraph>{name}</BigParagraph>
            <BigParagraph>{price}€</BigParagraph>
          </div>
          <Paragraph className={"text-justify line-clamp-4 "}>
            {description}
          </Paragraph>
        </div>
      </a>
    </Link>
  );
}
