import Head from "next/head";
import Image from "next/image";
import { PanierButton } from "../components/atoms";
import { Template } from "../components/molecules/templates/Template";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shop - VB BMX</title>
      </Head>
      <Template title="Home Page">
      <PanierButton />

      </Template>
    </>
  );
}
