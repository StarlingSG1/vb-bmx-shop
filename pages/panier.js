import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BigParagraph, Button, Paragraph } from "../components/atoms";
import { PanierArticle, Template } from "../components/molecules";

export default function Panier() {
  const [articles, setArticles] = useState([]);
  const [panierContent, setPanierContent] = useState([]);
  const [total, setTotal] = useState(0);

  // addition each price of article in panierContent
  const handleTotal = () => {
    let theTotal = 0;
    panierContent.forEach((article) => {
      theTotal += article.price * article.quantity;
    });
    setTotal(theTotal);
  };

  useEffect(() => {
    // get json content from localstorage
    const panier = localStorage.getItem("vb-bmx-panier");
    const panierArray = panier ? JSON.parse(panier) : [];
    setPanierContent(panierArray);
    handleTotal();
  }, []);

  useEffect(() => { handleTotal()}, [panierContent]);

  return (
    <>
      <Head>
        <title>Shop - Panier</title>
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
                  {panierContent?.length > 1
                    ? panierContent.length + " articles"
                    : panierContent.length + " article"}
                </Paragraph>
                <div className="flex items-center justify-between mb-16">
                  <Paragraph>Total : </Paragraph>
                  <Paragraph>{total} €</Paragraph>
                </div>
                <Button
                  onClick={() => {
                    alert("Redirection vers Stripe -> Paiement commande");
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
