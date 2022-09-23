import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BigParagraph, Paragraph, Price } from "../../atoms";

export function PanierArticle({
  article,
  index,
  panierContent,
  setPanierContent = () => {},
}) {

  const [articlePrice, setArticlePrice] = useState(article.price);

  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const removeOneFromArray = () => {

    const panier = localStorage.getItem("vb-bmx-panier");
    const panierArray = panier ? JSON.parse(panier) : [];
    const index = panierArray.findIndex(
      (item) => item.id === article.id && item.size === article.size
    );
    panierArray.splice(index, 1);
    localStorage.setItem("vb-bmx-panier", JSON.stringify(panierArray));
    setPanierContent(panierArray);
    // const newPanierContent = panierContent.filter(
    //   (item) => item.id !== article.id
    // );
    // setPanierContent(newPanierContent);
    // localStorage.setItem("vb-bmx-panier", JSON.stringify(newPanierContent));
  };

  const changeQuantity = (payload) => {
    const index = panierContent.findIndex((item) => item.id === payload.id && item.size === payload.size && item.flocage === payload.flocage && item.color === payload.color);
    const newArticle = { ...panierContent[index], quantity: payload.quantity};
    const newPanier = panierContent
    newPanier[index] = newArticle;
    localStorage.setItem("vb-bmx-panier", JSON.stringify(newPanier));
    const panier = localStorage.getItem("vb-bmx-panier");
    const panierArray = panier ? JSON.parse(panier) : [];
    setPanierContent(panierArray);  
  }

  const handlePrice = () => {
    const price = article.price * article.quantity;
    setArticlePrice(price);
  }

  

  useEffect(() => {
    handlePrice()
  } , [article]);



  return (
    <>
      <div className="relative aspect-square mb-8 col-span-2 mr-[15px]">
        <Link href={"/produits/" + article.slug}>
          <a>
            <Image
              src={article.image}
              className="absolute object-cover "
              layout="fill"
              alt={article.name}
            />
          </a>
        </Link>
      </div>
      <div className={"col-span-3 flex flex-col gap-5 pr-6  "}>
        <BigParagraph className={"mb-2.5"}>{article.name}</BigParagraph>
        <Paragraph>
          Taille : {article?.size != null ? article?.size : "Unique"}
        </Paragraph>
        <div className="flex items-center gap-4">

        <Paragraph>
          Quantité :
          </Paragraph>
          <select
            className="h-[25px] w-[200px] pl-2 text-black"
            type="select"
            onChange={(e) => {changeQuantity({id: article.id, size: article.size, flocage: article.flocage, color: article.color, quantity: parseInt(e.target.value, 10)})}}
            >
            {arrayNumber.map((number) => (
              <>
              {number == article.quantity ? (
                <option key={number} value={number} selected >{number}</option>
                ) : (
                  <option key={number} value={number}>{number}</option>
                  )                
                  
                }
              </>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-5">

        {article?.color !== null && (
          <Paragraph>Couleur : {article.color}</Paragraph>
          )}
          {article?.color && article?.flocage && <div className="h-[25px] w-[1px] bg-white"></div>}
        {article?.flocage !== null && (
          <Paragraph>Flocage : {article.flocage}</Paragraph>
          )}
          </div>
        <Price>{articlePrice} €</Price>
      </div>
      <div className="col-start-6">

      <p
        onClick={() => {
          removeOneFromArray();
        }}
        className="font-lato  cursor-pointer  underline text-white"
        >
        supprimer article
      </p>
        </div>
    </>
  );
}
