import { useEffect, useState } from "react";
import {getAllCommandes, getUserCommandes} from "../../../api/commandes/commandes";
import { useUserContext } from "../../../context";
import { Modal, TableContent, TableHead } from "../../atoms";
import { TableCommandes } from "../../molecules/commandes/TableCommande";

export function Commandes({admin = false, setNbCommandes = () => {}}) {
  const [isOpen, setIsOpen] = useState(false);
  const [commandes, setCommandes] = useState([]);
  const [commande, setCommande] = useState(null);

  const { user } = useUserContext();

  const getCommandes = async () => {
   const data =  admin ?
     await getAllCommandes()  : 
     await getUserCommandes(user.id);
    setCommandes(data)
    admin && setNbCommandes(data.length)
  };

    const [date, setDate] = useState(0)

  //   const getCommandesTotal = () => {
  //     let total = 0;
  //     commande?.Article.forEach(article => {
  //         total += article?.quantity * article?.Product?.price;
  //     } )
  //     setTotal(total);
  // }

  useEffect(() => {
    getCommandes();
    // admin && getCommandesTotal()
  }, []);

  useEffect(() => {
    console.log(commandes)
  }, [commandes]);

  useEffect(() => {
    getCommandes();
  }, [commande]);

  return (
    <div className="grid grid-cols-12 mt-[70px] ">
      <table className="col-span-10 col-start-2 ">
        <thead className="border-b-[5px] border-l-[5px] border-red ">
          <tr>
            <TableHead>ID</TableHead>
            <TableHead>N° de commande</TableHead>
            <TableHead>Nb Articles</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </tr>
        </thead>
        <tbody>
          {commandes &&
            commandes.map((commande, index) => (
              <TableCommandes onClick={() => {setIsOpen(true); setCommande(commande)}} id={index} key={commande.id} commande={commande} />
            ))}
        </tbody>
      </table>
      <Modal isOpen={isOpen} commande={commande} setCommande={setCommande} user={user} setIsOpen={setIsOpen} />
    </div>
  );
}
