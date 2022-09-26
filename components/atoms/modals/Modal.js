import Image from "next/image";
import { SmallArticle } from "../../molecules";
import { Paragraph, RoundedIcon, BigParagraph, SubTitle } from "../../atoms";
import { useEffect, useState } from "react";
import { updateCommandStatus } from "../../../api/commandes/commandes";

export function Modal({ isOpen, setIsOpen = () => {}, user, commande, setCommande = () => {} }) {

  const [date, setDate] = useState(0)
  const [total, setTotal] = useState(0)
  const [articleQuantity, setArticleQuantity] = useState(0)
  const [commandStatus, setCommandStatus] = useState(commande?.status)

  const formatDate = () => {
    const date = new Date(commande?.createdAt)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    setDate(`${day}/${month}/${year}`)
}

const getTotal = () => {
  let total = 0;
  commande?.Article.forEach(article => {
    total += article.quantity * article?.Product?.price;
  } )
  setTotal(total);
}

const articleLength = () => {
  let length = 0;
  commande?.Article.forEach(article => {
      length += article.quantity;
  } )
  setArticleQuantity(length)
}

const changeStatus = async () => {
  const response = await updateCommandStatus(commande.id, commandStatus)
  setCommandStatus(response.status)
  setCommande({...commande, status: response.status})
  setIsOpen(false)
}


  useEffect(() => {
    formatDate()
    getTotal()
    articleLength()
    setCommandStatus(commande?.status)
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="cursor-pointer z-20 bg-[#000000]/[.35] overflow-hidden fixed min-h-screen w-screen top-0 left-0 flex items-center justify-center"
          ></div>
          <div className=" z-30 absolute top-1/2 md:min-h-[435px] min-h-m 500:pt-0 pt-5 md:w-[778px] sm:w-auto w-[95%] left-1/2 -translate-y-[250px] -translate-x-1/2 bg-white opacity-100 rounded-lg">
            <div className="w-full flex justify-between  350:items-center items-end 500:pr-[25px] pr-4">
              <div className="flex  500:flex-row flex-col 500:items-center md:w-[653px] w-full justify-between md:pr-0 500:pr-10 350:pr-5 500:h-[98px] border-b-2 border-red 500:pl-[30px] pl-4">
                <SubTitle className="text-blue md:block hidden ">COMMANDE :</SubTitle>
                <SubTitle className="text-blue 500:text-subtitle text-2xl">{commande?.number}</SubTitle>
                <BigParagraph className="italic text-blue">
                  {date}
                </BigParagraph>
              </div>
              <RoundedIcon
                onClick={() => {
                  setIsOpen(false);
                }}
                className="min-h-[50px] min-w-[50px]"
                icon={"/assets/img/cross.svg"}
              />
            </div>
            <div className="w-full flex 500:items-center 500:flex-row flex-col mt-5 500:px-8 px-4">
              <div className="flex py-2 flex-col gap-5 ">
                <Paragraph className="text-blue">{commande?.user?.lastName}  {" "}  {commande?.user?.firstName}</Paragraph>
                <Paragraph className="text-blue">
                  {commande?.user?.email}
                </Paragraph>
                <Paragraph className="text-blue">{commande?.user?.phone}</Paragraph>
              </div>
              <span className="500:h-[122px] h-[2px] 500:w-[2px] w-full md:ml-[45px] 500:ml-[30px]  mr-5 bg-red"></span>
              <div className="flex py-2 flex-col gap-5 ">
                <Paragraph className="text-blue">
                  Nombre d'articles : {articleQuantity > 1 ? " " + articleQuantity + " articles" : " " + articleQuantity + " article"}
                </Paragraph>
                <Paragraph className="text-blue">Total : {total}€</Paragraph>
                {/* Remplacer le "en cours" par la valeur du status , dans la version non admin */}
                {/* <Paragraph className="text-blue">Status : en cours</Paragraph> */}
                <div className="flex sm:flex-row 500:flex-col 350:flex-row flex-col  md:items-center gap-2">
                  <Paragraph className="text-blue">Status :</Paragraph>
                  {user?.role !== "USER" ? (
                    <select
                      className="h-[25px] w-[200px] border border-red focus:outline-red pl-2"
                      type="select"
                      defaultValue={commande?.status}
                      onChange={(e) => {setCommandStatus(e.target.value)}}
                    >
                      {commandStatus && commandStatus === "ENCOURS" ? (
                        <option value="ENCOURS"  selected>en cours</option>
                      ) : (
                        <option value="ENCOURS" >en cours</option>
                      )}
                      {commandStatus && commandStatus === "RECUPERATION" ? (
                        <option value="RECUPERATION"  selected >prêt à être récupéré</option>
                      ) : (
                        <option value="RECUPERATION">prêt à être récupéré</option>
                      )}
                      {commandStatus && commandStatus === "ARCHIVE" ? (
                        <option value="ARCHIVE"  selected >Archivé</option>
                      ) : (
                        <option value="ARCHIVE" >Archivé</option>
                      )}
                    </select>
                  ) : (
                    commande?.status
                  )}
                  {user?.role !== "USER" && commandStatus != commande?.status && (
                    <>
                      <p onClick={() => changeStatus()} className="cursor-pointer font-lato underline">
                        Valider
                      </p>
                      <p onClick={(() => setCommandStatus(commande?.status))} className="cursor-pointer font-lato italic text-red">
                        Annuler
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-[30px] 500:px-8 px-4">
              <BigParagraph className="text-blue">ARTICLES : </BigParagraph>
              <div className="w-full grid grid-cols-2 gap-4 mt-4 mb-8">
                {commande && commande?.Article?.map((article, index) => (
                  <SmallArticle article={article} key={index}/>
                )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
