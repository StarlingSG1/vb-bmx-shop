import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
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
import { useRouter } from "next/router";
import {
  getAllFrom,
  getOneFrom,
  getOneFromBody,
} from "../../api/products/products";
import { useUserContext } from "../../context";

export default function Produit() {
  // call context

  const [isOpen, setIsOpen] = useState(false);
  const [boolFlocageYes, setBoolFlocageYes] = useState(false);
  const [boolFlocageNo, setBoolFlocageNo] = useState(true);
  const [article, setArticle] = useState([]);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await getAllFrom("products");
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const flocageYes = () => {
    setBoolFlocageYes(true);
    setBoolFlocageNo(false);
  };

  const flocageNo = () => {
    setBoolFlocageYes(false);
    setBoolFlocageNo(true);
  };

  const addToCart = async (article) => {
    //  add article to localstorage vb-bmx-panier
    setIsOpen(true)
    const panier = localStorage.getItem("vb-bmx-panier");
    const panierArray = panier ? JSON.parse(panier) : [];
    panierArray.push(article);
    localStorage.setItem("vb-bmx-panier", JSON.stringify(panierArray));
    
  }


  const router = useRouter();
  const { id, name } = router.query;

  const getSelectedArticle = async () => {
    if (id) {
      const products = await getOneFrom("products", id);
      setArticle(products);
    } else {
      const slug = window.location.href.split("/")[4];
      const products = await getOneFromBody("products/slug", { slug: slug });
      setArticle(products);
    }
  };

  useEffect(() => {
    getSelectedArticle();
  }, []);

  return (
    <>
      <Head>
        <title>Shop - Nom du produit</title>
      </Head>
      <Template title="Nos produits" hasReturn={true}>
        <PanierButton />
        <ReturnButton href={"/produits"} />
        <div className="grid grid-cols-12 gap-[50px]">
          <div className="col-span-8 col-start-3 grid grid-cols-8 gap-[50px] ">
            <div className="col-span-4 h-[550px] relative">
              <Image
                src="/assets/img/product1.png"
                layout="fill"
                loading="lazy"
              />
            </div>
            <div className="col-span-4 pt-4">
              <IntermediateParagraph className={"text-center"}>
                {article && article.name}
              </IntermediateParagraph>
              <Paragraph className={"text-justify mt-6 mb-5"}>
                {article && article.description}
              </Paragraph>
              {/* Séparator */}
              <div className="h-[2px] w-full bg-red mb-[30px]"></div>
              <div className="flex justify-between items-center mb-5">
                {article?.Size?.length === 0 ||
                (article?.Size &&
                  article?.Size[0] &&
                  article?.Size[0]?.name === "Unique") ? (
                  <BigParagraph className={"flex items-center gap-2.5"}>
                    Taille :
                    <Paragraph className={"w-[200px]"}>Unique</Paragraph>
                  </BigParagraph>
                ) : (
                  <>
                    <BigParagraph>Taille :</BigParagraph>
                    <select className="h-[25px] w-[200px] pl-2" type="select">
                      <option>Choisir une taille</option>
                      {article &&
                        article.Size &&
                        article.Size.map((size, index) => (
                          <option key={index}>{size.name}</option>
                        ))}
                    </select>
                  </>
                )}
                <span className="h-[25px] w-[1px] bg-white"></span>
                <Price>{article && article.price}€</Price>
              </div>
              {article && article.flocage && (
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
                  {boolFlocageYes && (
                    <input
                      className="h-[25px] w-[200px] pl-2.5"
                      placeholder="Flocage"
                    />
                  )}
                </div>
              )}
              <div className="mt-[25px] flex justify-center">
                <Button
                  onClick={() => {
                    addToCart(article);

                  }}
                >
                  Ajouter au panier
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex justify-center mt-10">
            <Title className="!text-intermediate">Nos autres produits</Title>
          </div>
          <div className="col-span-10 col-start-2 gap-[50px] grid grid-cols-10">
            <div className="col-span-1 flex items-center cursor-pointer">
              <div className="bg-red h-20 w-[66px] flex items-center justify-center">
                <Image src="/assets/img/arrow.svg" height={28} width={15} />
              </div>{" "}
            </div>
            <div className="col-span-8 grid-cols-8 gap-[50px] grid">
              {products &&
                products.map((product, index) => 
                  
                   product.id !== article.id  &&
                    


                    
                    <div className="col-span-2   relative">
                    <div className="h-[265px] relative">
                    <Image src="/assets/img/product1.png" layout="fill" />
                    </div>
                    <Paragraph className={"my-2.5"}>{product.name}</Paragraph>
                    <Price>{product.price}€</Price>
                    </div>
                  
                )}
            </div>
            <div className="col-span-1 flex items-center cursor-pointer">
              <div className="bg-red h-20 w-[66px] flex items-center justify-center">
                <Image
                  src="/assets/img/arrow.svg"
                  className="rotate-180"
                  height={28}
                  width={15}
                />
              </div>
            </div>
          </div>
        </div>
      </Template>
      <PanierModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
