import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BigParagraph, Button, Paragraph } from "../components/atoms";
import { PanierArticle, Template } from "../components/molecules";

export default function Panier() {
  const [articles, setArticles] = useState([]);
  const [panierContent, setPanierContent] = useState([]);

  useEffect(() => {
    // get json content from localstorage
    const panier = localStorage.getItem("vb-bmx-panier");
    const panierArray = panier ? JSON.parse(panier) : [];
    setPanierContent(panierArray);
  }, []);

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
                    key={article.id}
                    article={article}
                    panierContent={panierContent}
                    setPanierContent={setPanierContent}
                  />
                ))}
                {panierContent?.length === 0 && <BigParagraph>Votre panier est vide</BigParagraph>}

            </div>
            <div className="col-span-2  ">
              <div className="w-full sticky top-10">
                <BigParagraph className={"underline mb-10"}>
                  RÉCAPITULATIF
                </BigParagraph>
                <Paragraph className={"mb-5"}>XX articles</Paragraph>
                <div className="flex items-center justify-between mb-16">
                  <Paragraph>Total : </Paragraph>
                  <Paragraph>XXX €</Paragraph>
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
