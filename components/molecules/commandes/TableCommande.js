import { useEffect, useState } from "react"
import { TableContent } from "../../atoms"

export function TableCommandes({onClick = () => {}, setIsOpen  = () => {}, id, commande}) {

    const [articleQuantity, setArticleQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    const [date, setDate] = useState(0)

    const articleLength = () => {
        let length = 0;
        commande?.Article.forEach(article => {
            length += article.quantity;
        } )
        setArticleQuantity(length)
    }

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
            total += article?.quantity * article?.Product?.price;
        } )
        setTotal(total);
    }

    useEffect(() => {
        articleLength()
        getTotal()
        formatDate()
    } , [commande])


    return (
        <tr onClick={onClick} className="h-[60px] cursor-pointer hover:bg-red duration-200 odd:bg-black">
                  <TableContent>{id + 1}</TableContent>
                  <TableContent>{commande.number}</TableContent>
                  <TableContent className="md:table-cell hidden">{articleQuantity} {articleQuantity > 1 ? "articles" : "article"} </TableContent>
                  <TableContent className="350:table-cell hidden">{total}€</TableContent>
                  <TableContent>{commande?.status === "ARCHIVE" ? "Terminé" : (commande?.status === "ENCOURS" ? "En cours" : (commande?.status === "RECUPERATION") && "A récuperer")}</TableContent>
                  <TableContent className="500:table-cell hidden">{date}</TableContent>
                </tr>
    )
}