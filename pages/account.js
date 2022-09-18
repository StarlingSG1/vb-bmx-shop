import Head from "next/head";
import { useState } from "react";
import {
  Paragraph,
} from "../components/atoms";
import { Template } from "../components/molecules";
import { Commandes, Profile } from "../components/organisms";
import { useUserContext } from "../context";

export default function Account() {
  const [commandes, setCommandes] = useState(0);

  // get user from context

  const { user  } = useUserContext();


  return (
    <>
      <Head>
        <title>Mon compte</title>
      </Head>
      <Template title="Mon compte">
        {
          <div className="w-[500px] m-auto ">
          <div className="w-full flex justify-between relative bg-transparent h-[60px] border-2 border-red rounded-full">
            <button
              className="px-[65px] z-10 bg-transparent rounded-full "
              onClick={() => {
                setCommandes(0);
              }}
              >
              <Paragraph>Mon profil</Paragraph>
            </button>
            <button
              className="px-[65px] z-10 bg-transparent rounded-full"
              onClick={() => {
                setCommandes(1);
              }}
              >
              <Paragraph>Mes commandes</Paragraph>
            </button>
            <span
              className={`absolute h-full rounded-full bg-red duration-200 ${
                commandes
                ? "w-[250px] translate-x-[250px]"
                : "w-[205px] -left-1"
              } `}
              ></span>
          </div>
          {commandes === 0 && <Profile />}
        </div>
        }
        {commandes === 1 && (
         <Commandes/>
        )}
      </Template>
    </>
  );
}
