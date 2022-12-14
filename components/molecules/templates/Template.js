import { useState } from "react";
import { useUserContext } from "../../../context";
import { Title } from "../../atoms";
import { Header, Footer } from "../../molecules";

export function Template({children, title = "VB BMX", hasReturn = false, panier = false}) {

    const { user } = useUserContext();


    return (
        <>
            <Header/>
                <main className={`w-full   px-4 ${panier ? "md:pt-20 pt-32" : "pt-20"}`} style={{minHeight: "calc(100vh - 539px)"}}>
                    <div className={`w-full flex justify-center ${hasReturn ? "mb-8" : "mb-20"}`}>
                        <Title className={"text-center max-w-[799px]"}>{title !== false && title}</Title>
                    </div>
                    <div className="w-full h-full flex justify-center">
                    <div className="max-w-[1600px] w-full  ">
                    {children}
                    </div>
                    </div>
                </main>
            <Footer/>  
        </>
    )
}