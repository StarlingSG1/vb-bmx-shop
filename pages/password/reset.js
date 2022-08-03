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

export default function Reset() {
  return (
    <>
      <Head>
        <title>Mot de pass oublié</title>
      </Head>
      <Template title="Mot de passe oublié" hasReturn={true}>
        <ReturnButton />
        <div className="flex items-center flex-col gap-5">
          <BigParagraph>
            Renseigner votre adresse mail pour recevoir un mail de changement de{" "}
            <br /> mot de passe :
          </BigParagraph>
          <Input type="email" placeholder={"Adresse mail"} />
          <div className="flex justify-end mt-2.5 w-[593px]">
            <Button>Envoyer email</Button>
          </div>
        </div>
      </Template>
    </>
  );
}
