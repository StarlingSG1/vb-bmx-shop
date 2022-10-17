import Head from "next/head";
import { Card, Paragraph } from "../../components/atoms";
import { Template } from "../../components/molecules";

export default function Canceled(){
    return (
        <>
        <Head>
            <title>Echec paiement - Boutique BMX club Verrière le Buisson</title>
        </Head>
        <Template title="Echec de la commande">
            <div className="shadow-card w-full md:w-[745px] bg-white rounded-lg m-auto px-10 py-5">
                <p className={"font-lato text-red text-center text-intermediate font-medium mb-5"}>Le paiement a échoué.</p>
                <p className="font-lato text-bigger text-blue mb-4">Vous n'avez <strong>pas été débité</strong></p>
                <p className={"font-lato text-blue text-bigger"}>Veuillez réessayer dans quelques instants et/ou avec un autre moyen de paiement.</p>
            </div>

        </Template>
        </>
        )
}