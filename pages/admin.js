import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card } from "../components/atoms";
import { Template } from "../components/molecules";
import { Commandes } from "../components/organisms";
import { useUserContext } from "../context";

export default function Admin() {

  const { user,noLogged, redirectionAdmin, redirection } = useUserContext();

  const navigate = useRouter();


  useEffect(() => {
    console.log(user,redirection, redirectionAdmin, noLogged)
    if (user && user === null || (redirectionAdmin && redirectionAdmin === true && redirection && redirection === true && noLogged && noLogged === true)) {
      navigate.push('/');
    }
  }, [redirectionAdmin, redirection, user, noLogged, navigate]);

  const [nbCommandes, setNbCommandes] = useState(0);
  const [commandeTotal, setCommandeTotal] = useState(0);
  const [nbArticles, setNbArticles] = useState(0);
  const [nbCommandesEnCours, setNbCommandesEnCours] = useState(0);
  const [nbCommandesArchive, setNbCommandesArchive] = useState(0);

  const stats = (stat) => {
    switch (stat) {
      case nbCommandes:
        return nbCommandes + " " + (nbCommandes > 1 ? "commandes" : "commande");
      case commandeTotal:
        return commandeTotal;
      case nbArticles:
        return nbArticles + " " + (nbArticles > 1 ? "articles" : "article");
      case nbCommandesEnCours:
        return (
          nbCommandesEnCours +
          " " +
          (nbCommandesEnCours > 1 ? "commandes" : "commande")
        );
      case nbCommandesArchive:
        return (
          nbCommandesArchive +
          " " +
          (nbCommandesArchive > 1 ? "commandes" : "commande")
        );
      default:
        return 0;
    }
  };

  
    return (
      <>
        <Head>
          <title>Espace Admin - Boutique BMX club Verrières le Buisson</title>
        </Head>
        <Template title="Espace admin">
          <div className="grid xl:grid-cols-12 lg:grid-cols-10 sm:grid-cols-12 grid-cols-2  xl:px-0 md:px-12 gap-[50px]">
            <Card title="Total de commande" icon={"/assets/img/user.svg"}>
              {stats(nbCommandes)}
            </Card>
            <Card title="Total des ventes" icon={"/assets/img/bag.svg"}>
              {stats(commandeTotal)}{commandeTotal > 0 && "€"}
            </Card>
            <Card title="Articles vendus" icon={"/assets/img/tshirt.svg"}>
              {stats(nbArticles)}
            </Card>
            <Card title="Commandes en cours" icon={"/assets/img/loading.svg"}>
              {stats(nbCommandesEnCours)}
            </Card>
            <Card title="Commandes terminés" icon={"/assets/img/archive.svg"}>
              {stats(nbCommandesArchive)}
            </Card>
          </div>
          {!redirectionAdmin && !redirection &&
            <Commandes
              setNbCommandes={setNbCommandes}
              setCommandeTotal={setCommandeTotal}
              setNbArticles={setNbArticles}
              setNbCommandesEnCours={setNbCommandesEnCours}
              setNbCommandesArchive={setNbCommandesArchive}
              admin={true}
            />}
        </Template>
      </>
    );
  }
