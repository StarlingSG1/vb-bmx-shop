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
import { toast } from "react-toastify";

export default function Produit() {
  // call context

  const { panier, setPanier = () => { } } = useUserContext();

  const [isOpen, setIsOpen] = useState(false);
  const [boolFlocageYes, setBoolFlocageYes] = useState(false);
  const [boolFlocageNo, setBoolFlocageNo] = useState(true);
  const [article, setArticle] = useState({});
  const [sizeValue, setSizeValue] = useState(null);
  const [colorValue, setColorValue] = useState(null);
  const [flocageValue, setFlocageValue] = useState(null);
  const [modalItem, setModalItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [panierLength, setPanierLength] = useState(0);

  const fetchProducts = async () => {
    const products = await getAllFrom("products");
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
    getSelectedArticle();
  }, []);

  useEffect(() => {
    handleTotal()
  }, [isOpen]);



  const flocageYes = () => {
    setBoolFlocageYes(true);
    setBoolFlocageNo(false);
  };

  const flocageNo = () => {
    setBoolFlocageYes(false);
    setBoolFlocageNo(true);
  };

  const addToCart = async (theArticle) => {
    const panier = localStorage.getItem("vb-bmx-panier");
    const panierArray = panier ? JSON.parse(panier) : [];
    if(article?.Size?.length > 0 && (!sizeValue || sizeValue === "Choisir une taille")){
      return toast.error("Veuillez choisir une taille")
    }
    if(article?.Color?.length > 0 && (!colorValue || colorValue === "Choisir une couleur  ")){
      return toast.error("Veuillez choisir une couleur")
    }
    const item = { id: theArticle.id, name: theArticle.name, price: theArticle.price, size: sizeValue, flocage: flocageValue, color: colorValue, image: theArticle.image, slug: theArticle.slug, quantity: 1, stripe: theArticle.stripe_id };
    setModalItem(item);
    const toAdd = true
    panierArray.forEach((theArticle) => {
      if (theArticle.id === item.id && theArticle.size === item.size && theArticle.flocage === item.flocage && theArticle.color === item.color) {
        theArticle.quantity += 1;
        toAdd = false;
      }
    }
    );
    if (toAdd === true) {
      panierArray.push(item);
    }
    localStorage.setItem("vb-bmx-panier", JSON.stringify(panierArray));
    setPanier(panierArray)
    var theQuantity = 0;
    panierArray.forEach((theArticle) => {
      theQuantity += theArticle.quantity 
    });
    setPanierLength(theQuantity);
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
        <title>{article?.name} - Boutique BMX club Verrière le Buisson</title>
      </Head>
      <Template title="Nos produits" hasReturn={true} panier={true}>
        <PanierButton />
        <ReturnButton href={"/produits"} />
        <div className="md:grid md:grid-cols-12 gap-[50px]">
          <div className="xl:col-span-8 xl:col-start-3 lg:col-span-10 lg:col-start-2 col-span-12 md:grid md:grid-cols-8 md:gap-[50px]  flex flex-col  ">
            <img src={article && article.image}
              alt={article && article.name}
              className="md:col-span-4 md:w-auto md:h-auto h-[400px] m-auto 500:w-2/3  aspect-square object-cover"
            />
            <div className="col-span-4 pt-4">
              <IntermediateParagraph className={"text-left uppercase"}>
                {article && article.name}
              </IntermediateParagraph>
              <Paragraph className={"text-justify mt-6 mb-5"}>
                {article && article.description}
              </Paragraph>
              {/* Séparator */}
              <div className="h-[2px] w-full bg-red mb-[30px]"></div>
              <div className="flex justify-between items-center mb-5">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">

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
                        <select className="h-[25px] w-[200px] pl-2" type="select" onChange={(e) => { setSizeValue(e.target.value) }}>
                          <option value={null}>Choisir une taille</option>
                          {article &&
                            article.Size &&
                            article.Size.map((size, index) => (
                              <option key={index} value={size.name}>{size.name}</option>
                            ))}
                        </select>
                      </>
                    )}
                  </div>
                    {article?.Color?.length > 0 &&
                  <div className="flex items-center gap-4">
                      <>
                        <BigParagraph>Couleur :</BigParagraph>
                        <select className="h-[30px] w-[200px] pl-2" type="select" onChange={(e) => { setColorValue(e.target.value) }}>
                          <option value={null}>Choisir une couleur</option>
                          {article &&
                            article.Color &&
                            article.Color.map((color, index) => (
                              <option key={index} value={color.name}>{color.name}</option>
                            ))}
                        </select>
                      </>
                  </div>
                    }
                </div>  
                <span className="h-[25px] w-[1px] bg-white 350:block hidden"></span>
                <Price className="350:block hidden">{article && article.price}€</Price>
              </div>
              <Price className="350:hidden block mb-5">Prix : {article && article.price}€</Price>
              {article && article.flocage && (
                <div className="flex gap-5 flex-wrap">
                  <BigParagraph>Flocage : </BigParagraph>
                  <div
                    onClick={() => {
                      flocageYes();
                    }}
                    className="flex items-center gap-2.5 cursor-pointer"
                  >
                    <div
                      className={`h-4 w-4 ${boolFlocageYes ? "bg-red" : "bg-white"
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
                      className={`h-4 w-4 ${!boolFlocageNo ? "bg-white" : "bg-red"
                        } rounded-full`}
                    ></div>
                    <Paragraph>Non</Paragraph>
                  </div>
                  {boolFlocageYes && (
                    <input
                      className="h-[25px] w-[200px] pl-2.5"
                      placeholder="Flocage"
                      onChange={(e) => { setFlocageValue(e.target.value) }}
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
          <div className="col-span-12 flex justify-center mt-10 md:mb-0 mb-10">
            <Title className="!text-intermediate">Nos autres produits</Title>
          </div>
          <div className="xl:col-span-8 xl:col-start-3 lg:col-span-10 lg:col-start-2 md:col-span-12 grid  gap-[50px]">
            {/* <div className="col-span-1 flex items-center cursor-pointer">
              <div className="bg-red h-20 w-[66px] flex items-center justify-center">
                <Image
                  src="/assets/img/arrow.svg"
                  height={28}
                  width={15}
                  alt="left arrow"
                />
              </div>{" "}
            </div> */}
            <div className="xl:col-span-8 lg:col-span-10  896:grid-cols-8 md:grid-cols-9 sm:grid-cols-2 xl:grid-cols-12 gap-[50px] sm:grid flex flex-col">
              {products &&
                products.map(
                  (product, index) =>
                    product.id !== article.id && (
                      <div key={index} className="896:col-span-2 md:col-span-3 sm:w-auto col-span-1 relative">
                        <img src={product.image}
                          className=" w-full object-cover sm:h-[265px] h-[300px]"
                          alt="produit" />
                        <Paragraph className={"my-2.5"}>
                          {product.name}
                        </Paragraph>
                        <Price>{product.price}€</Price>
                      </div>
                    )
                )}
            </div>
            {/* <div className="col-span-1 flex items-center cursor-pointer">
              <div className="bg-red h-20 w-[66px] flex items-center justify-center">
                <Image
                  src="/assets/img/arrow.svg"
                  className="rotate-180"
                  height={28}
                  width={15}
                  alt="right arrow"
                />
              </div>
            </div> */}
          </div>
        </div>
      </Template>
      <PanierModal isOpen={isOpen} article={article} modalItem={modalItem} panierLength={panierLength} setIsOpen={setIsOpen} total={total} />
    </>
  );
}
