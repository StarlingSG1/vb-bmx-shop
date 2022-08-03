import { useState } from "react";
import { BorderedButton, Button, Input, Paragraph } from "../../atoms";

export function Profile() {
  const [update, setUpdate] = useState(false);
  const [password, setPassword] = useState(false);

  const toUpdate = () => {
    setUpdate(true);
  };

  const toPassword = () => {
    setPassword(true);
    setUpdate(false);
  };

  const validateUpdate = () => {};

  const validePassword = () => {};

  const returnPassword = () => {
    setPassword(false);
    setUpdate(true);
  };

  const returnUpdate = () => {
    setUpdate(false);
  };

  return (
    <>
      <div
        className={`w-full ${
          update || password ? "gap-5" : " px-[86px]  gap-10"
        } mt-[70px] flex flex-col `}
      >
        {!password && (
          <div
            className={`flex items-center justify-between ${
              update && "gap-[50px]"
            }`}
          >
            {update ? (
              <>
                <Input className={"!w-1/2"} placeholder="Prénom" />
                <Input className={"!w-1/2"} placeholder="Nom" />
              </>
            ) : (
              <>
                <div className="flex items-center gap-2.5">
                  <Paragraph className="!font-bold underline">
                    Prénom :
                  </Paragraph>
                  <Paragraph>Jérémie</Paragraph>
                </div>
                <div className="flex items-center gap-2.5">
                  <Paragraph className="!font-bold underline">Nom :</Paragraph>
                  <Paragraph>Barrière</Paragraph>
                </div>
              </>
            )}
          </div>
        )}
        {update ? (
          <>
            <Input className="!w-full" placeholder="Adresse mail" />
            <Input className="!w-full" placeholder="Numéro de téléphone" />
          </>
        ) : password ? (
          <>
            <Input className={"!w-full"} placeholder="Ancien mot de passe" />
            <Input className={"!w-full"} placeholder="Nouveau mot de passe" />
            <Input className={"!w-full"} placeholder="Confirmer mot de passe" />
          </>
        ) : (
          <>
            <div className="flex items-center gap-2.5">
              <Paragraph className="!font-bold underline">
                Adresse mail :
              </Paragraph>
              <Paragraph>barriere.jeremie@gmail.com</Paragraph>
            </div>
            <div className="flex items-center gap-2.5">
              <Paragraph className="!font-bold underline">
                Numéro de téléphone :
              </Paragraph>
              <Paragraph>01 23 45 67 89</Paragraph>
            </div>
          </>
        )}
      </div>

      {update ? (
        <>
          <div className="flex justify-end mt-[5px]">
            <p
              onClick={() => {
                toPassword();
              }}
              className="font-roboto cursor-pointer text-[18px]  underline text-white"
            >
              changer mon mot de passe
            </p>
          </div>
          <div className="flex justify-between px-[79px] mt-10">
            <BorderedButton
              onClick={() => {
                returnUpdate();
              }}
            >
              Annuler
            </BorderedButton>
            <Button
              onClick={() => {
                setUpdate(false);
              }}
            >
              Enregister
            </Button>
          </div>
        </>
      ) : password ? (
        <div className="flex justify-between px-[79px] mt-10">
          <BorderedButton
            onClick={() => {
              returnPassword();
            }}
          >
            Retour
          </BorderedButton>
          <Button
            onClick={() => {
              setPassword(false);
            }}
          >
            Enregister
          </Button>
        </div>
      ) : (
        <div className="flex justify-center mt-[50px]">
          <Button
            className=""
            onClick={() => {
              toUpdate();
            }}
          >
            Modifier
          </Button>
        </div>
      )}
    </>
  );
}
