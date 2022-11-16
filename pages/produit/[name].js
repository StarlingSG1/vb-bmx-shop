  import Head from "next/head";
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
import Link from "next/link";
import { SmallSkeletonArticle } from "../../components/molecules/articles/SmallSkeletonArticle";

export default function Produit() {

  const { panier, setPanier = () => { } } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const [boolFlocageYes, setBoolFlocageYes] = useState(false);
  const [boolFlocageNo, setBoolFlocageNo] = useState(true);
  const [article, setArticle] = useState(null);
  const [sizeValue, setSizeValue] = useState(null);
  const [colorValue, setColorValue] = useState(null);
  const [flocageValue, setFlocageValue] = useState(null);
  const [modalItem, setModalItem] = useState(null);
  const [products, setProducts] = useState(null);
  const [total, setTotal] = useState(0);
  const [panierLength, setPanierLength] = useState(0);
  const [nbImagesProduct, setNbImagesProduct] = useState(0);
  const [sliderState, setSliderState] = useState(1);

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
    if (article?.Size?.length > 0 && (!sizeValue || sizeValue === "Choisir une taille")) {
      return toast.error("Veuillez choisir une taille")
    }
    if (article?.Color?.length > 0 && (!colorValue || colorValue === "Choisir une couleur  ")) {
      return toast.error("Veuillez choisir une couleur")
    }
    const item = { id: theArticle.id, name: theArticle.name, price: theArticle.price, size: sizeValue, flocage: flocageValue, color: colorValue, image: theArticle.Image[0].url, slug: theArticle.slug, quantity: 1, stripe: theArticle.stripe_id };
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

  // function if param is true, add 1 to sliderState, if false remove 1
  const handleSlider = (param) => {
    if (sliderState === 1 && param === false) {
      return
    } else if (sliderState === nbImagesProduct && param === true) {
      return
    } else {
      const slider = document.getElementById("slider");
      if (param === true) {
        setSliderState(sliderState + 1);
        slider.style.transform = `translateX(-${sliderState * 100}%)`;
      } else {
        setSliderState(sliderState - 1);
        slider.style.transform = `translateX(-${(sliderState - 2) * 100}%)`
      }
    }
  };


  const router = useRouter();
  const { id, name } = router.query;

  const getSelectedArticle = async () => {
    if (id) {
      const products = await getOneFrom("products", id);
      setArticle(products);
      setNbImagesProduct(products?.Image?.length);
    } else {
      const slug = window.location.href.split("/")[4];
      const products = await getOneFromBody("products/slug", { slug: slug });
      setArticle(products);
      setNbImagesProduct(products?.Image?.length);

    }
  };

  return (
    <>
      <Head>
        <title>{article?.name} - Boutique BMX club Verrières le Buisson</title>
      </Head>
      <Template title={false} hasReturn={true} panier={true}>
        <PanierButton />
        <ReturnButton href={"/produits"} />
        <div className="md:grid md:grid-cols-12 gap-[50px]">
          {article ? (
            <div className="xl:col-span-8 xl:col-start-3 lg:col-span-10 lg:col-start-2 col-span-12 md:grid md:grid-cols-8 md:gap-[50px]  flex flex-col  ">
              <div className="md:col-span-4 md:w-auto md:h-auto h-[400px] m-auto 500:w-2/3 relative aspect-square overflow-hidden">
                <div id="slider" className="w-full h-full duration-500 flex" >
                  {article?.Image?.map((image, index) => {
                    return (
                      <img key={index} src={image.url}
                      alt={image.name}
                      className=" w-full h-full aspect-square object-cover"
                      />
                      )
                    })}
                </div>
                {sliderState !== 1 && <button onClick={() => { handleSlider(false) }} className="bg-red rounded-md h-10 w-10 absolute z-20 top-1/2 -translate-y-[50%] left-5 flex items-center justify-center opacity-60 duration-200 hover:opacity-100"><svg width="14" height="29" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.717816 16.3814L15.335 1.30371M0.696289 14.9676L15.7745 29.5843" stroke="#F4F5F5" strokeWidth="2" />
                </svg>
                </button>}
                {sliderState !== nbImagesProduct && <button onClick={() => { handleSlider(true) }} className="bg-red rounded-md h-10 w-10 absolute z-20 top-1/2 -translate-y-[50%] flex items-center justify-center right-5 opacity-60 duration-200 hover:opacity-100 rotate-180"><svg width="14" height="29" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.717816 16.3814L15.335 1.30371M0.696289 14.9676L15.7745 29.5843" stroke="#F4F5F5" strokeWidth="2" />
                </svg>
                </button>}
              </div>
              <div className="col-span-4 pt-4">
                <h1 className={"text-left uppercase font-lato font-bold text-intermediate text-white"}>
                  {article && article?.name}
                </h1>
                <h2 className={"text-justify font-lato  text-white mt-6 mb-5"}>
                  {article && article?.description}
                </h2>
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
                              article?.Size &&
                              article?.Size.map((size, index) => (
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
          ) :
            <div className=" animate-pulse xl:col-span-8 xl:col-start-3 lg:col-span-10 lg:col-start-2 col-span-12 md:grid md:grid-cols-8 md:gap-[50px]  flex flex-col  ">
              <div
                className="md:col-span-4   h-[400px]   col-span-4 bg-blue-skeleton "
              ></div>
              <div className="col-span-4 pt-4">
                <div className="bg-blue-skeleton h-14 mb-5"></div>
                <div className="bg-blue-skeleton h-40 mb-5"></div>
                {/* Séparator */}
                <div className="h-[2px] w-full bg-red mb-[30px]"></div>
                <div className="flex justify-between items-center mb-5">
                  <div className="flex flex-col w-1/2 gap-6">
                    <div className="bg-blue-skeleton h-8 w-full"></div>
                  </div>
                  <span className="h-[25px] w-[10px] bg-blue-skeleton 350:block hidden"></span>
                  <div className="350:block hidden bg-blue-skeleton h-8 w-14"></div>
                </div>
                <div className="350:hidden block mb-5 bg-blue-skeleton h-8 w-14"></div>
                <div className="mt-[25px] flex justify-center">
                  <div className="w-[172px] h-[48px] bg-blue-skeleton rounded-full"></div>
                </div>
              </div>
            </div>}
          {/* end first sec */}
          <div className="col-span-12 flex justify-center mt-10 md:mb-0 mb-10">
            <Title className="!text-intermediate">Nos autres produits</Title>
          </div>
          <div className="xl:col-span-8 xl:col-start-3 lg:col-span-10 lg:col-start-2 md:col-span-12 grid  gap-[50px]">
            <div className="xl:col-span-8 lg:col-span-10  896:grid-cols-8 md:grid-cols-9 sm:grid-cols-2 xl:grid-cols-12 gap-[50px] sm:grid flex flex-col">
              {products ?
                products.map(
                  (product, index) =>
                    product.id !== article?.id && (
                        <a href={`/produit/${product?.slug}`} className="896:col-span-2 cursor-pointer md:col-span-3 sm:w-auto col-span-1 relative">
                          <div key={index} className="">
                            <img src={product?.Image[0]?.url}
                              className=" w-full object-cover sm:h-[265px] h-[300px]"
                              alt={product?.Image[0]?.name} />
                            <Paragraph className={"my-2.5"}>
                              {product?.name}
                            </Paragraph>
                            <Price>{product?.price}€</Price>
                          </div>
                        </a>
                    )
                ) :
                <>
                  <SmallSkeletonArticle />
                  <SmallSkeletonArticle />
                  <SmallSkeletonArticle />
                  <SmallSkeletonArticle />
                </>}
            </div>
          </div>
        </div>
      </Template>
      <PanierModal isOpen={isOpen} article={article} modalItem={modalItem} panierLength={panierLength} setIsOpen={setIsOpen} total={total} />
    </>
  );
}
