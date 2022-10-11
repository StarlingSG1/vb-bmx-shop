import Head from "next/head";
import { useEffect } from "react";
import { Template } from "../../components/molecules";

export default function Success(){

    useEffect(() => {
        localStorage.removeItem("vb-bmx-panier");
    } ,[])
    return (
        <>
        <Head>
            <title>Succès paiement</title>
        </Head>
        <Template title="Paiement réussi">
            <div className="shadow-card h-56 w-[800px] bg-white rounded-lg m-auto px-10 py-5">
                <p className={"font-lato text-center text-intermediate font-medium mb-5"}>Merci pour votre commande</p>
                <p className="font-lato text-bigger text-blue mb-4">Votre commande a bien été enregistré !</p>
                <p className="font-lato text-bigger text-blue mb-4">Vous pouvez retrouver votre commande dans l'onglet <strong>Mon compte.</strong></p>
                <p className={"font-lato text-blue text-bigger"}>Un email avec notre <strong>numéro de commande</strong> vous a également été envoyé.</p>
            </div>
        </Template>
        </>
        )
}