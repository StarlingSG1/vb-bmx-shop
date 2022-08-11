import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "../../../context";
import { BigParagraph, Paragraph } from "../../atoms";

export function Article({ id, name, description, price, image }) {

  // call my context
  const {  setArticleId } = useUserContext();
  // name into slug and remove accents
  let slug = name.toLowerCase().replace(/ /g, "-");
  // remove slug accent
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  

  return (
    <Link href={{pathname: `/produits/${slug}`, query: {id: id}}} as={`/produits/${slug}`}>
      <a onClick={() => {setArticleId(id)}}>
        <div className="flex flex-col gap-2.5 cursor-pointer ">
          <div className="relative w-full   aspect-square">
            <Image src={"/assets/img/product1.png"} objectFit="cover" layout="fill" />
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
