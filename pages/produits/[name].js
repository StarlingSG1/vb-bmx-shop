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

  const { panier, setPanier = () => {} } = useUserContext();

  const [isOpen, setIsOpen] = useState(false);
  const [boolFlocageYes, setBoolFlocageYes] = useState(false);
  const [boolFlocageNo, setBoolFlocageNo] = useState(true);
  const [article, setArticle] = useState({});
  const [sizeValue, setSizeValue] = useState(null);
  const [flocageValue, setFlocageValue] = useState(null);
  const [modalItem, setModalItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchProducts = async () => {
    const products = await getAllFrom("products");
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
    getSelectedArticle();
  }, []);

  useEffect(() => {
  handleTotal()}, [handleTotal, isOpen]);



  const flocageYes = () => {
    setBoolFlocageYes(true);
    setBoolFlocageNo(false);
  };

  const flocageNo = () => {
    setBoolFlocageYes(false);
    setBoolFlocageNo(true);
  };

  const addToCart = async (article) => {
    const panier = localStorage.getItem("vb-bmx-panier");
    const panierArray = panier ? JSON.parse(panier) : [];
    const item = { id:  article.id, name: article.name, price: article.price, size: sizeValue, flocage: flocageValue, image: article.image, slug: article.slug, quantity: 1 };
    setModalItem(item);
    const toAdd = true
    panierArray.forEach((article) => {
      if(article.id === item.id && article.size === item.size && article.flocage === item.flocage){
        article.quantity += 1;
        toAdd = false;
      }
    }
    );
    if(toAdd === true){
      panierArray.push(item);
    }       
    localStorage.setItem("vb-bmx-panier", JSON.stringify(panierArray));
    setPanier(panierArray)
    setIsOpen(true);
  };

  const handleTotal = () => {
    let theTotal = 0;
    panier.forEach((article) => {
      theTotal += article.price * article.quantity;
    });
    setTotal(theTotal);
  };

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
                src={article && article.image}
                layout="fill"
                loading="lazy"
                alt={article && article.name}
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
                    <select className="h-[25px] w-[200px] pl-2" type="select" onChange={(e) => {setSizeValue(e.target.value)}}>
                      <option value={null}>Choisir une taille</option>
                      {article &&
                        article.Size &&
                        article.Size.map((size, index) => (
                          <option key={index} value={size.name}>{size.name}</option>
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
                      onChange={(e) => {setFlocageValue(e.target.value)}}
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
                <Image
                  src="/assets/img/arrow.svg"
                  height={28}
                  width={15}
                  alt="left arrow"
                />
              </div>{" "}
            </div>
            <div className="col-span-8 grid-cols-8 gap-[50px] grid">
              {products &&
                products.map(
                  (product, index) =>
                    product.id !== article.id && (
                      <div key={index} className="col-span-2   relative">
                        <div className="h-[265px] relative">
                          <Image
                            src={product.image}
                            layout="fill"
                            alt="produit"
                          />
                        </div>
                        <Paragraph className={"my-2.5"}>
                          {product.name}
                        </Paragraph>
                        <Price>{product.price}€</Price>
                      </div>
                    )
                )}
            </div>
            <div className="col-span-1 flex items-center cursor-pointer">
              <div className="bg-red h-20 w-[66px] flex items-center justify-center">
                <Image
                  src="/assets/img/arrow.svg"
                  className="rotate-180"
                  height={28}
                  width={15}
                  alt="right arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </Template>
      <PanierModal isOpen={isOpen} article={article} modalItem={modalItem} setIsOpen={setIsOpen} total={total} />
    </>
  );
}
