import Head from "next/head";
import Image from "next/image";
import { BigParagraph, PanierButton, Paragraph } from "../components/atoms";
import { Template } from "../components/molecules/templates/Template";

export default function Produit() {
  return (
    <>
      <Head>
        <title>Shop - Nos produits</title>
      </Head>
      <Template title="Nos produits">
        <PanierButton />
        <div className="grid grid-cols-4 gap-[50px]">
          <div className="flex flex-col gap-2.5 cursor-pointer">
            <Image src={"/assets/img/product1.png"} width="364" height="367" />
            <div className="flex justify-between">
              <BigParagraph>Nom du produit</BigParagraph>
              <BigParagraph>Prix€</BigParagraph>
            </div>
            <Paragraph className={"text-justify line-clamp-4 "}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </Paragraph>
          </div>
          <div className="flex flex-col gap-2.5 cursor-pointer">
            <Image src={"/assets/img/product2.png"} width="364" height="367" />
            <div className="flex justify-between">
              <BigParagraph>Nom du produit</BigParagraph>
              <BigParagraph>Prix€</BigParagraph>
            </div>
            <Paragraph className={"text-justify line-clamp-4 "}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </Paragraph>
          </div>
          <div className="flex flex-col gap-2.5 cursor-pointer">
            <Image src={"/assets/img/product3.png"} width="364" height="367" />
            <div className="flex justify-between">
              <BigParagraph>Nom du produit</BigParagraph>
              <BigParagraph>Prix€</BigParagraph>
            </div>
            <Paragraph className={"text-justify line-clamp-4 "}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </Paragraph>
          </div>
          <div className="flex flex-col gap-2.5 cursor-pointer">
            <Image src={"/assets/img/product4.png"} width="364" height="367" />
            <div className="flex justify-between">
              <BigParagraph>Nom du produit</BigParagraph>
              <BigParagraph>Prix€</BigParagraph>
            </div>
            <Paragraph className={"text-justify line-clamp-4 "}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </Paragraph>
          </div>
          <div className="flex flex-col gap-2.5 cursor-pointer">
            <Image src={"/assets/img/product1.png"} width="364" height="367" />
            <div className="flex justify-between">
              <BigParagraph>Nom du produit</BigParagraph>
              <BigParagraph>Prix€</BigParagraph>
            </div>
            <Paragraph className={"text-justify line-clamp-4 "}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </Paragraph>
          </div>
          <div className="flex flex-col gap-2.5 cursor-pointer">
            <Image src={"/assets/img/product2.png"} width="364" height="367" />
            <div className="flex justify-between">
              <BigParagraph>Nom du produit</BigParagraph>
              <BigParagraph>Prix€</BigParagraph>
            </div>
            <Paragraph className={"text-justify line-clamp-4 "}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </Paragraph>
          </div>
        </div>
      </Template>
    </>
  );
}
