import Head from "next/head";
import { useEffect } from "react";
import { Template } from "../../components/molecules";

export default function Success(){

    // useEffect(() => {
    //     localStorage.removeItem("vb-bmx-panier");
    // } ,[])
    return (
        <>
        <Head>
            <title>Succès paiement</title>
        </Head>
        <Template title="Paiement réussi">

        </Template>
        </>
        )
}