import Head from "next/head";
import { IntermediateParagraph, Paragraph } from "../components/atoms";
import { Template } from "../components/molecules";

export default function PolitiqueDeConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité</title>
      </Head>
      <Template title="Politique de confidentialité">
        <IntermediateParagraph className={"underline decoration-red"}>
          Qui sommes-nous ?
        </IntermediateParagraph>
        <Paragraph>
          L’adresse de notre site est : https://boutique.vb-bmx-club.fr
          <br />
          <br />
          Président du club: M. Lucas Auchecorne
          <br /> Vice président : M. Repingon Trésorière : Mme. Lahitte <br />
          Secrétaire : M. Guillaume
          <br /> <br />
          Adresses mail :
          <br /> - contact@vb-bmx-club.fr
          <br /> 
          <br />
          Téléphone : 06 63 48 61 30
          <br />
          Adresse : ROUTE des GÂTINES – 91370 Verrières le buisson
        </Paragraph>
        <br />
        <IntermediateParagraph className={"underline decoration-red"}>
          Hébergeur
        </IntermediateParagraph>
        <Paragraph>
         L’hébergeur de ce site web : OVH
        </Paragraph><br/>
        <IntermediateParagraph className={"underline decoration-red"}>
          Vos données
        </IntermediateParagraph>
        <Paragraph>
         Les informations personnelles que vous nous fournisés (prénom, nom, email, téléphone) ne seront transmis à aucun tiers. Elles ne seront utilisées que pour vous identifier et vous contacter dans le cadre de votre commande.
        </Paragraph>
      </Template>
    </>
  );
}
