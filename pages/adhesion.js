import Head from "next/head";
import { Template } from "../components/molecules";

export default function Adhesion(){
    return (
        <>
        <Head>
        <title>Adhésion - Boutique BMX club Verrière le Buisson</title>
      </Head>
      <Template title="Adhésion">
        <div className="flex items-center justify-center">
          <p className="text-white">Vous pourrez bientot vous inscrire au club ici ! Un peu de patience...</p>
        </div>
        </Template>
        </>
    )
}