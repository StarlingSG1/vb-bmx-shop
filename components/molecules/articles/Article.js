import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "../../../context";
import { BigParagraph, Paragraph } from "../../atoms";

export function Article({ id, name, description, price, image }) {

  const { setArticleId } = useUserContext();
  let slug = name?.toLowerCase().replace(/ /g, "-");
  slug = slug?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return (
      <Link href={{ pathname: `/produit/${slug}`, query: { id: id } }} as={`/produit/${slug}`}>
        <a onClick={() => { setArticleId(id) }}>
          <div className="flex flex-col gap-2.5 cursor-pointer ">
            <div className="relative w-full   aspect-square">
              <Image alt={name} src={image} objectFit="cover" layout="fill" />
            </div>
            <div className="flex justify-between gap-2.5">
              <h2 className={"font-roboto font-medium text-bigger text-white  uppercase line-clamp-2 h-[54px]"}>{name}</h2>
              <BigParagraph>{price}€</BigParagraph>
            </div>
            <h3 className={"text-justify font-lato  text-white line-clamp-4 "}>
              {description}
            </h3>
          </div>
        </a>
      </Link>
    );
  }

