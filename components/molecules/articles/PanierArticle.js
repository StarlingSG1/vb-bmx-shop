/* eslint-disable @next/next/no-img-element */
 import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
    toast.success("Article(s) supprimé du panier");
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
      <div className="relative aspect-square xl:mb-8 md:mb-12 500:mb-10 mb-4 md:col-span-2  ">
        <Link href={"/produit/" + article?.slug}>
          <a>
            <img
              src={article.image}
              className="absolute object-cover w-full h-full"
              alt={article.name}
            />
          </a>
        </Link>
      </div>
      <div className={"md:col-span-3 flex flex-col xl:gap-[18px] gap-3 md:pr-6 500:pl-3  "}>
        <BigParagraph className="line-clamp-2" >{article.name}</BigParagraph>
        <Paragraph>
          Taille : {article?.size != null ? article?.size : "Unique"}
        </Paragraph>
        <div className="flex items-center gap-4">

        <Paragraph>
          Quantité :
          </Paragraph>
          <select
            className="h-[25px] pl-2 text-black"
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
        <Price className="500:mb-5">{articlePrice} €</Price>
        <p
        onClick={() => {
          removeOneFromArray();
        }}
        className="font-lato md:hidden cursor-pointer 500:mb-0 mb-10  underline text-white"
        >
        supprimer l'article
      </p>
      </div>
      <div className="md:col-start-6 md:block hidden">

      <p
        onClick={() => {
          removeOneFromArray();
        }}
        className="font-lato  cursor-pointer  underline text-white"
        >
        supprimer l'article
      </p>
        </div>
    </>
  );
}
