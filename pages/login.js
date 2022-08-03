import Head from "next/head";
import { Button, Input, Paragraph, TextLink } from "../components/atoms";
import { Template } from "../components/molecules/templates/Template";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Template title="Connexion">
        <div className="w-[593px] m-auto">
          <div className=" gap-4 flex flex-col items-center relative bg-blue z-10">
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-blue -z-10"></span>
            <span className="w-[126px] h-[126px] absolute -z-20  rounded-full border-8 border-red -top-[33px] -left-[63px]"></span>

            <Input type="email" placeholder={"Adresse mail"} />
            <Input type="password" placeholder={"Mot de passe"} />
          </div>
          <div className="flex justify-end mt-1">
            <TextLink href="/password/reset">mot de passe oublié</TextLink>
          </div>
          <div className="flex justify-between items-center relative mt-[25px] z-10 pl-8 pr-[15px]">
            <span className="absolute h-[50px] w-[50px] border-[5px] rounded-full right-[4px] -bottom-[20px] border-white -z-10"></span>
            <TextLink href="/register">Je n'ai pas de compte</TextLink>
            <span className="w-[1px] h-[35px] bg-white"></span>{" "}
            <Button>Se connecter</Button>
          </div>
        </div>
      </Template>
    </>
  );
}
