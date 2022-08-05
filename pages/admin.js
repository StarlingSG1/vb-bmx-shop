import Head from "next/head";
import { Card } from "../components/atoms";
import { Template } from "../components/molecules";
import { Commandes } from "../components/organisms";

export default function Admin(){
    return (
        <>
            <Head>
                <title>Shop - Espace Admin</title>
            </Head>
            <Template title="Espace admin">
                <div className="grid grid-cols-12 gap-[50px]">
                    <Card title="Total de commande" icon={"/assets/img/user.svg"}>XXX commandes</Card>
                    <Card title="Total des ventes" icon={"/assets/img/bag.svg"}>XXXX€</Card>
                    <Card title="Articles vendus" icon={"/assets/img/tshirt.svg"}>XXX articles</Card>
                    <Card title="Commandes en cours" icon={"/assets/img/loading.svg"}>X commandes</Card>
                    <Card title="Commandes archivés" icon={"/assets/img/archive.svg"}>XX commandes</Card>
                </div>
                <Commandes/>
            </Template>
        </>
    )
}