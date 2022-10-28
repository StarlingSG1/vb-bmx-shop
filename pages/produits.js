import Head from "next/head";
import Image from "next/image";
import { getAllFrom } from "../api/products/products";
import { useEffect, useState } from "react";
import { BigParagraph, PanierButton, Paragraph } from "../components/atoms";
import { Template } from "../components/molecules/templates/Template";
import { Article } from "../components/molecules";
import { Skeleton } from "../components/molecules/articles/SkeletonArticle";

export default function Produit() {
  const [products, setProducts] = useState([]);
  const [skeleton, setSkeleton] = useState(false);

  const fetchProducts = async () => {
    setSkeleton(true);
    const products = await getAllFrom("products");
    setProducts(products);
    setSkeleton(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Nos produits - Boutique BMX club Verrières le Buisson</title>
      </Head>
      <Template title="Nos produits" panier={true}>
        <PanierButton />
        <div className=" flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-[50px] lg:grid-cols-4">
          {/* ne pas oublier le props image */}
          {!skeleton && products ? products.map((product) => <Article key={product.id} id={product.id} name={product.name} price={product.price} description={product.description} image={product?.Image[0]?.url} alt={product?.Image[0].name} />) : <><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></>}
        </div>
      </Template>
    </>
  );
}
