import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { selfPasswordUpdate, selfUserUpdate } from "../../../api/users/user";
import { useUserContext } from "../../../context";
import { BorderedButton, Button, Input, Paragraph } from "../../atoms";

export function Profile() {
  const [update, setUpdate] = useState(false);
  const [password, setPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { user, verifyTheToken } = useUserContext();

  const toUpdate = () => {
    setUpdate(true);
  };

  const toPassword = () => {
    setPassword(true);
    setUpdate(false);
  };

  const validateUpdate = async () => {
    userData.token = localStorage.getItem("vb-bmx-token");
    const response = await selfUserUpdate(userData)
    localStorage.setItem("vb-bmx-token", response.newToken);
    verifyTheToken()
    setUpdate(false)
  };

  const validePassword = async () => {
    passwordData.token = localStorage.getItem("vb-bmx-token");
    if (passwordData.oldPassword !== passwordData.newPassword) {
      if (passwordData?.newPassword === passwordData?.confirmPassword) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (passwordRegex.test(passwordData?.newPassword)) {
          const response = await selfPasswordUpdate(passwordData)
          localStorage.setItem("vb-bmx-token", response.newToken);
          verifyTheToken()
          setPassword(false)
        } else {
          toast.error("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial");
        }
      } else {
        toast.error("Les mots de passe ne correspondent pas");
      }
    } else {
      toast.error("Le nouveau mot de passe ne peut pas être identique à l'ancien")
    }

  };

  const returnPassword = () => {
    setPassword(false);
    setUpdate(true);
  };

  const returnUpdate = () => {
    setUpdate(false);
  };

  useEffect(() => {
    setUserData({ ...userData, email: user?.email, firstName: user?.firstName, lastName: user?.lastName, phone: user?.phone });
  }, []);

  return (
    <>
      <div
        className={`w-full ${update || password ? "gap-5" : "500:gap-10 gap-8"
          } mt-[70px] flex flex-col `}
      >
        {!password && (
          <div
            className={`flex 500:flex-row flex flex-col 500:items-center 500:justify-between  gap-8 ${update && "500:gap-[50px] gap-5"
              }`}
          >
            {update ? (
              <>
                <Input className={"!500:w-1/2 !w-full"} placeholder="Prénom" onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} defaultValue={user && user.firstName} />
                <Input className={"500:!w-1/2 !w-full"} placeholder="Nom" onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} defaultValue={user && user.lastName} />
              </>
            ) : (
              <>
                <div className="flex items-center gap-2.5">
                  <Paragraph className="!font-bold underline">
                    Prénom :
                  </Paragraph>
                  <Paragraph>{user && user.firstName}</Paragraph>
                </div>
                <div className="flex items-center gap-2.5">
                  <Paragraph className="!font-bold underline">Nom :</Paragraph>
                  <Paragraph>{user && user.lastName}</Paragraph>
                </div>
              </>
            )}
          </div>
        )}
        {update && (
          <>
            <Input className="!w-full" type="email" placeholder="Adresse mail" onChange={(e) => setUserData({ ...userData, email: e.target.value })} defaultValue={user && user.email} />
            <Input className="!w-full" type="phone" placeholder="Numéro de téléphone" defaultValue={user && user.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
          </>
        )}
        {password && (
          <>
            <Input className="!w-full" type="password" placeholder="Ancien mot de passe" onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })} defaultValue={null} />
            <Input className="!w-full" type="password" placeholder="Nouveau mot de passe" onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })} defaultValue={null} />
            <Input className="!w-full" type="password" placeholder="Confirmer mot de passe" onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })} defaultValue={null} />
          </>
        )}
        {!password && !update && (
          <>
            <div className="flex items-center gap-2.5">
              <Paragraph className="!font-bold underline">
                Adresse mail :
              </Paragraph>
              <Paragraph>{user && user.email}</Paragraph>
            </div>
            <div className="flex items-center gap-2.5">
              <Paragraph className="!font-bold underline">
                Numéro de téléphone :
              </Paragraph>
              <Paragraph>{user && user.phone}</Paragraph>
            </div>
          </>
        )}
      </div>

      {update ? (
        <>
          <div className="flex justify-end md:mt-[5px] mt-2.5">
            <p
              onClick={() => {
                toPassword();
              }}
              className="font-roboto cursor-pointer text-[18px]  underline text-white"
            >
              changer mon mot de passe
            </p>
          </div>
          <div className="flex justify-between md:px-[79px] mt-10">
            <BorderedButton
              onClick={() => {
                returnUpdate();
              }}
            >
              Annuler
            </BorderedButton>
            <Button
              onClick={() => {
                validateUpdate()
              }}
            >
              Enregister
            </Button>
          </div>
        </>
      ) : password ? (
        <div className="flex justify-between md:px-[79px] mt-10">
          <BorderedButton
            onClick={() => {
              returnPassword();
            }}
          >
            Retour
          </BorderedButton>
          <Button
            onClick={() => {
              validePassword()
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
