import { useEffect, useState } from "react";
import {
  getAllCommandes,
  getUserCommandes,
} from "../../../api/commandes/commandes";
import { useUserContext } from "../../../context";
import { Modal, TableContent, TableHead } from "../../atoms";
import { TableCommandes } from "../../molecules/commandes/TableCommande";

export function Commandes({
  admin = false,
  setNbCommandes = () => {},
  setCommandeTotal = () => {},
  setNbArticles = () => {},
  setNbCommandesEnCours =() => {},
  setNbCommandesArchive= () => {}
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [commandes, setCommandes] = useState([]);
  const [commande, setCommande] = useState(null);

  const { user } = useUserContext();

  const getCommandes = async () => {
    const data = admin
      ? await getAllCommandes()
      : await getUserCommandes(user.id);
    setCommandes(data);
    admin && setNbCommandes(data.length);
  };

  const getCommandesTotal = () => {
    let total = 0;
    commandes.forEach((commande) => {
      commande?.Article.forEach((article) => {
        total += article?.quantity * article?.Product?.price;
      });
    });
    setCommandeTotal(total);
  };

  const articleLength = () => {
    let length = 0;
    commandes.forEach((commande) => {
      commande?.Article.forEach((article) => {
        length += article?.quantity;
      });
    });
    setNbArticles(length);
  };

  const commandesStatus = () => {
    let enCours = 0;
    let archive = 0;
    commandes.forEach((commande) => {
      (commande.status === "ENCOURS" || commande.status === "RECUPERATION") ? enCours++ : archive++;
    });
    setNbCommandesEnCours(enCours);
    setNbCommandesArchive(archive);
  }

  useEffect(() => {
    getCommandes();
  }, [])

  useEffect(() => {
    admin && getCommandesTotal();
    admin &&  articleLength();
    admin && commandesStatus();
  }, [commandes]);
  
  return (
    <div className="grid grid-cols-12 mt-[70px] ">
      <table className="xl:col-span-10 col-span-12 xl:col-start-2 xl:mx-0 md:mx-12 ">
        <thead className="border-b-[5px] border-l-[5px] border-red ">
          <tr>
            <TableHead>ID</TableHead>
            <TableHead>N° de commande</TableHead>
            <TableHead className="md:block hidden">Nb Articles</TableHead>
            <TableHead className="350:table-cell hidden">Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="500:table-cell hidden">Date</TableHead>
          </tr>
        </thead>
        <tbody>
          {commandes &&
            commandes.map((commande, index) => (
              <TableCommandes
                onClick={() => {
                  setIsOpen(true);
                  setCommande(commande);
                }}
                id={index}
                key={index}
                commande={commande}
              />
            ))}
        </tbody>
      </table>
      <Modal
        isOpen={isOpen}
        commande={commande}
        setCommande={setCommande}
        user={user}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
