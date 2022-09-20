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
    const index = panierContent.findIndex((item) => item.id === payload.id);
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
      <div className="relative aspect-square mb-6 col-span-2 mr-[15px]">
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
      <div className={"col-span-2 flex flex-col gap-5"}>
        <BigParagraph className={"mb-2.5"}>{article.name}</BigParagraph>
        <Paragraph>
          Taille : {article?.size != null ? article?.size : "Unique"}
        </Paragraph>
        <Paragraph>
          Quantité :
          <select
            className="h-[25px] w-[200px] pl-2 text-black"
            type="select"
            onChange={(e) => {changeQuantity({id: article.id, quantity: parseInt(e.target.value, 10)})}}
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
        </Paragraph>
        {article?.flocage !== null && (
          <Paragraph>Flocage : {article.flocage}</Paragraph>
        )}
        <Price>{articlePrice} €</Price>
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
