import { useState } from "react";
import { Modal, TableContent, TableHead } from "../../atoms";

export function Commandes(){

  const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="grid grid-cols-12 mt-[70px] ">
            <table className="col-span-10 col-start-2 ">
              <thead className="border-b-[5px] border-l-[5px] border-red ">
                <tr >
                  <TableHead>ID</TableHead>
                  <TableHead>N° de commande</TableHead>
                  <TableHead>Nb Articles</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </tr>
              </thead>
              <tbody>
                <tr onClick={() => {setIsOpen(true)}} className="h-[60px] cursor-pointer hover:bg-red duration-200 odd:bg-black">
                  <TableContent>1</TableContent>
                  <TableContent>VBMX00000001</TableContent>
                  <TableContent>1 article</TableContent>
                  <TableContent>22.00€</TableContent>
                  <TableContent>En cours</TableContent>
                  <TableContent>05/07/2022</TableContent>
                </tr>
                <tr onClick={() => {setIsOpen(true)}} className="h-[60px] cursor-pointer hover:bg-red duration-200 odd:bg-black">
                  <TableContent>158</TableContent>
                  <TableContent>VBMX00000002</TableContent>
                  <TableContent>2 article</TableContent>
                  <TableContent>452.00€</TableContent>
                  <TableContent>En cours</TableContent>
                  <TableContent>05/07/2022</TableContent>
                </tr>
              </tbody>
            </table>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
          </div>

    )
}