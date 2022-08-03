import Head from "next/head";
import { Button, Input, TextLink } from "../components/atoms";
import { Template } from "../components/molecules/templates/Template";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Template title="Inscription">
        <div className="w-[593px] m-auto">
          <div className=" gap-4 flex flex-col items-center relative bg-blue z-10">
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-blue -z-10"></span>
            <span className="w-[284px] h-[284px] absolute -z-20  rounded-full border-8 border-red -top-[60px] -left-[109px]"></span>
            <div className=" flex items-center justify-between w-full">
              <Input
                type="text"
                className={"!w-[284px]"}
                placeholder={"Prénom"}
              />
              <Input type="text" className={"!w-[284px]"} placeholder={"Nom"} />
            </div>
            <Input type="email" placeholder={"Adresse mail"} />
            <Input type="password" placeholder={"Mot de passe"} />
            <Input type="password" placeholder={"Confirmer mot de passe"} />
            <Input type="phone" placeholder={"Numéro de téléphone"} />
          </div>

          <div className="flex justify-between items-center relative mt-[25px] z-10 pl-8 pr-[15px]">
            <span className="absolute h-[50px] w-[50px] border-[5px] rounded-full right-[4px] -bottom-[20px] border-white -z-10"></span>
            <TextLink href="/login">J'ai déjà un compte</TextLink>
            <span className="w-[1px] h-[35px] bg-white"></span>{" "}
            <Button>Créer mon compte</Button>
          </div>
        </div>
      </Template>
    </>
  );
}
