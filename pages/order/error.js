import Head from "next/head";
import { Bloc, Paragraph, TextLink } from "../../components/atoms";
import { Template } from "../../components/molecules";

export default function OrderError() {
  return (
    <>
      <Head>
        <title>Shop - Erreur commande</title>
      </Head>
      <Template title="Une erreur est survenue">
        <div className="grid grid-cols-12">
            <div className="flex gap-[50px] col-span-5 col-start-4">
                <Bloc/>
                <Paragraph className="text-bigger">Votre commande a bien été prise en compte, vous pouvez retrouver toutes vos commandes l’onglet mon compte {">"} commandes  ou en <TextLink href="/account"> cliquant ici</TextLink>  </Paragraph>
            </div>
        </div>
      </Template>
    </>
  );
}
