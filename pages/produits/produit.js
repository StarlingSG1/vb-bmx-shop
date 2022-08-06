import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import {
  BigParagraph,
  Button,
  IntermediateParagraph,
  PanierButton,
  PanierModal,
  Paragraph,
  Price,
  ReturnButton,
  Title,
} from "../../components/atoms";
import { Template } from "../../components/molecules";

export default function Produit() {
  const [boolFlocageYes, setBoolFlocageYes] = useState(false);
  const [boolFlocageNo, setBoolFlocageNo] = useState(true);

  const flocageYes = () => {
    setBoolFlocageYes(true);
    setBoolFlocageNo(false);
  };

  const flocageNo = () => {
    setBoolFlocageYes(false);
    setBoolFlocageNo(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Shop - Nom du produit</title>
      </Head>
      <Template title="Nos produits" hasReturn={true}>
        <PanierButton />
        <ReturnButton />
        <div className="grid grid-cols-12 gap-[50px]">
          <div className="col-span-8 col-start-3 grid grid-cols-8 gap-[50px] ">
            <div className="col-span-4 h-[550px] relative">
              <Image src="/assets/img/product1.png" layout="fill" />
            </div>
            <div className="col-span-4 pt-4">
              <IntermediateParagraph className={"text-center"}>
                Nom du produit
              </IntermediateParagraph>
              <Paragraph className={"text-justify mt-6 mb-5"}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </Paragraph>
              {/* Séparator */}
              <div className="h-[2px] w-full bg-red mb-[30px]"></div>
              <div className="flex justify-between items-center mb-5">
                <BigParagraph>Choisir une taille :</BigParagraph>
                <select className="h-[25px] w-[200px] pl-2" type="select">
                  <option>Choisir une taille</option>
                  <option>Taille 1</option>
                  <option>Taille 2</option>
                  <option>Taille 3</option>
                  <option>Taille 4</option>
                </select>
                <span className="h-[25px] w-[1px] bg-white"></span>
                <Price>Prix€</Price>
              </div>
              <div className="flex gap-5">
                <BigParagraph>Flocage : </BigParagraph>
                <div
                  onClick={() => {
                    flocageYes();
                  }}
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <div
                    className={`h-4 w-4 ${
                      boolFlocageYes ? "bg-red" : "bg-white"
                    } rounded-full`}
                  ></div>
                  <Paragraph>Oui</Paragraph>
                </div>
                <div
                  onClick={() => {
                    flocageNo();
                  }}
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <div
                    className={`h-4 w-4 ${
                      !boolFlocageNo ? "bg-white" : "bg-red"
                    } rounded-full`}
                  ></div>
                  <Paragraph>Non</Paragraph>
                </div>
                {boolFlocageYes && <input className="h-[25px] w-[200px] pl-2.5" placeholder="Flocage" />}
              </div>
              <div className="mt-[25px] flex justify-center">
                <Button onClick={() => {setIsOpen(true)}}>Ajouter au panier</Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex justify-center mt-10">
            <Title className="!text-intermediate">Nos autres produits</Title>
          </div>
          <div className="col-span-10 col-start-2 gap-[50px] grid grid-cols-10">
            <div className="col-span-1 flex items-center cursor-pointer">
            <div className="bg-red h-20 w-[66px] flex items-center justify-center">
                <Image src="/assets/img/arrow.svg"   height={28} width={15}/>
              </div>            </div>
            <div className="col-span-8 grid-cols-8 gap-[50px] grid">
              <div className="col-span-2   relative">
                <div className="h-[265px] relative">
                  <Image src="/assets/img/product1.png" layout="fill" />
                </div>
                <Paragraph className={"my-2.5"}>Nom du produit</Paragraph>
                <Price>Prix€</Price>
              </div>
              <div className="col-span-2   relative">
                <div className="h-[265px] relative">
                  <Image src="/assets/img/product1.png" layout="fill" />
                </div>
                <Paragraph className={"my-2.5"}>Nom du produit</Paragraph>
                <Price>Prix€</Price>
              </div>
              <div className="col-span-2   relative">
                <div className="h-[265px] relative">
                  <Image src="/assets/img/product1.png" layout="fill" />
                </div>
                <Paragraph className={"my-2.5"}>Nom du produit</Paragraph>
                <Price>Prix€</Price>
              </div>
              <div className="col-span-2   relative">
                <div className="h-[265px] relative">
                  <Image src="/assets/img/product1.png" layout="fill" />
                </div>
                <Paragraph className={"my-2.5"}>Nom du produit</Paragraph>
                <Price>Prix€</Price>
              </div>
            </div>
            <div className="col-span-1 flex items-center cursor-pointer">
              <div className="bg-red h-20 w-[66px] flex items-center justify-center">
                <Image src="/assets/img/arrow.svg" className="rotate-180" height={28} width={15}/>
              </div>
            </div>
          </div>
        </div>
      </Template>
      <PanierModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
}
