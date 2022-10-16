import Head from "next/head";
import { useState } from "react";
import {
  Paragraph,
} from "../components/atoms";
import { Template } from "../components/molecules";
import { Commandes, Profile } from "../components/organisms";
import { useUserContext } from "../context";

export default function Account() {
  const [commandes, setCommandes] = useState(false);

  return (
    <>
      <Head>
        <title>Mon compte - Boutique BMX club Verrière le Buisson</title>
      </Head>
      <Template title="Mon compte">
        
          <div className="md:w-[500px] 500:w-[400px]  m-auto ">
          <div className="500:w-full flex justify-between w-[260px] m-auto relative bg-transparent h-[60px] border-2 border-red rounded-full">
            <button
              className="md:px-[65px] 500:px-[30px] px-4 z-10 bg-transparent rounded-full "
              onClick={() => {
                setCommandes(false);
              }}
              >
              <Paragraph className={"500:text-base text-sm min-w-max"}>Mon profil</Paragraph>
            </button>
            <button
              className="md:px-[65px] 500:px-[30px] px-4 z-10 bg-transparent rounded-full"
              onClick={() => {
                setCommandes(true);
              }}
              >
              <Paragraph className={"500:text-base text-sm min-w-max"}>Mes commandes</Paragraph>
            </button>
            <span
              className={`absolute h-full rounded-full bg-red duration-200 ${
                commandes
                ? "md:w-[250px] 500:w-[189px] w-[134px] translate-x-[124px] md:translate-x-[250px] 500:translate-x-[209px]"
                : "md:w-[205px] 500:w-[144px] w-[103px] left-0"
              } `}
              ></span>
          </div>
          {commandes === false && <Profile />}
        </div>
        
        {commandes === true && (
         <Commandes/>
        )}
      </Template>
    </>
  );
}
