import Head from "next/head";
import { Template } from "../../components/molecules/templates/Template";
import Link from "next/link";
import {
  BigParagraph,
  Button,
  Input,
  ReturnButton,
  TextLink,
} from "../../components/atoms";
import { resetPassword } from "../../api/users/user";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Reset() {

  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const reset = async () => {
    const response = await resetPassword(email)
    setEmailSent(true)
    toast.success(response.message)
  }


  return (
    <>
      <Head>
        <title>Mot de passe oublié - Boutique BMX club Verrière le Buisson</title>
      </Head>
      <Template title="Mot de passe oublié" hasReturn={true}>
        {emailSent === false ? (
          <>
            <ReturnButton />

            <form onSubmit={(e) => { reset(); e.preventDefault() }}>

              <div className="flex items-center flex-col gap-5">
                <BigParagraph>
                  Renseigner votre adresse mail pour recevoir un mail de changement de{" "}
                  <br /> mot de passe :
                </BigParagraph>
                <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder={"Adresse mail"} />
                <div className="flex justify-center 350:justify-end mt-2.5 sm:w-[593px] w-full">
                  <Button type="submit">Envoyer email</Button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="shadow-card  w-full md:w-[745px] bg-white rounded-lg m-auto px-10 py-5">
            <p className={"font-lato text-center text-intermediate font-medium mb-5"}>Un email a été envoyé</p>
            <p className="font-lato text-bigger text-blue mb-4">Si l'email existe dans notre base de donnée, il recevra un mail pour la réinitialisation du mot de passe.</p>
            <TextLink href="/login" className={"font-lato text-blue text-bigger"}>Retour à la page de connexion</TextLink>
          </div>)
        }
      </Template>
    </>
  );
}
