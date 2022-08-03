import Head from "next/head";
import { useState } from "react";
import {
  BorderedButton,
  Button,
  Input,
  Modal,
  Paragraph,
  TableContent,
  TableHead,
  TextLink,
} from "../components/atoms";
import { Template } from "../components/molecules";
import { Commandes, Profile } from "../components/organisms";
export default function Account() {
  const [commandes, setCommandes] = useState(false);

  return (
    <>
      <Head>
        <title>Mon compte</title>
      </Head>
      <Template title="Mon compte">
        <div className="w-[500px] m-auto ">
          <div className="w-full flex justify-between relative bg-transparent h-[60px] border-2 border-red rounded-full">
            <button
              className="px-[65px] z-10 bg-transparent rounded-full "
              onClick={() => {
                setCommandes(false);
              }}
            >
              <Paragraph>Mon profil</Paragraph>
            </button>
            <button
              className="px-[65px] z-10 bg-transparent rounded-full"
              onClick={() => {
                setCommandes(true);
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
          {!commandes && <Profile />}
        </div>
        {commandes && (
         <Commandes/>
        )}
      </Template>
    </>
  );
}
