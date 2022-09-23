import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { orderPanier } from "../api/order/order";
import { BigParagraph, Button, Paragraph } from "../components/atoms";
import { PanierArticle, Template } from "../components/molecules";
import { useUserContext } from "../context";

export default function Panier() {

  const  { user } = useUserContext();
  const navigate = useRouter();

  const [articles, setArticles] = useState([]);
  const [panierContent, setPanierContent] = useState([]);
  const [total, setTotal] = useState(0);
  const [nbArticles, SetNbArticles] = useState(0);

  // addition each price of article in panierContent
  const handleTotal = () => {
    let theTotal = 0;
    panierContent.forEach((article) => {
      theTotal += article.price * article.quantity;
    });
    setTotal(theTotal);
  };

  const handleQuantiy = () => {
    let theQuantity = 0;
    panierContent.forEach((article) => {
      theQuantity += article.quantity 
    });
    SetNbArticles(theQuantity);
  }

  const sendOrder = async () => {
    if(user){
      const response = await orderPanier(user.id, panierContent);
      if(!response.error){
        navigate.push(response.content.url)
      }
    } else {
      navigate.push("/login")
    }
  }

  useEffect(() => {
    // get json content from localstorage
    const panier = localStorage.getItem("vb-bmx-panier");
    const panierArray = panier ? JSON.parse(panier) : [];
    setPanierContent(panierArray);
    handleTotal();
  }, []);

  useEffect(() => { handleTotal(), handleQuantiy()}, [panierContent]);

  return (
    <>
      <Head>
        <title>Panier</title>
      </Head>
      <Template title="Panier">
        <div className="grid grid-cols-12 ">
          <div className=" col-span-8 col-start-3 grid grid-cols-8 gap-[50px]">
            <div className="border-r-2 border-red col-span-6 grid grid-cols-6 pr-[50px]">
              {/*  map articles */}
              {panierContent?.map((article, index) => (
                <PanierArticle
                  index={index}
                  key={index}
                  article={article}
                  panierContent={panierContent}
                  setPanierContent={setPanierContent}
                />
              ))}
              {panierContent?.length === 0 && (
                <BigParagraph>Votre panier est vide</BigParagraph>
              )}
            </div>
            <div className="col-span-2  ">
              <div className="w-full sticky top-10">
                <BigParagraph className={"underline mb-10"}>
                  RÉCAPITULATIF
                </BigParagraph>
                <Paragraph className={"mb-5"}>
                  { nbArticles > 1
                    ? nbArticles + " articles"
                    : nbArticles + " article"}
                </Paragraph>
                <div className="flex items-center justify-between mb-16">
                  <Paragraph>Total : </Paragraph>
                  <Paragraph>{total} €</Paragraph>
                </div>
                <Button
                  onClick={() => {
                    sendOrder()
                  }}
                >
                  Commander
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
}
