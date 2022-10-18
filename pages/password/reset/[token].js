import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BigParagraph,
  Button,
  Input,
  IntermediateParagraph,
  PanierButton,
  PanierModal,
  Paragraph,
  Price,
  ReturnButton,
  Title,
} from "../../../components/atoms";
import { Template } from "../../../components/molecules";
import { useRouter } from "next/router";
import {
  getAllFrom,
  getOneFrom,
  getOneFromBody,
} from "../../../api/products/products";
import { useUserContext } from "../../../context";
import { toast } from "react-toastify";
import { resetPasswordUpdate } from "../../../api/users/user";

export default function Produit() {


  const [loading, setLoading] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const { token } = router.query;


  const handleOnClick = async () => {
    setLoading(true);
    const response = await resetPasswordUpdate(token, passwords);
    if (response.error === false) {
      toast.success("Mot de passe modifié avec succès");
      router.push("/login");
    }else{
      toast.error("Une erreur est survenue, veuillez réessayer");
    }
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Réinitialisation mot de passe - Boutique BMX club Verrières le Buisson</title>
      </Head>
      <Template title="Changer votre mot de passe" hasReturn={true} panier={true}>
        <div className="sm:w-[593px] w-full m-auto">
          <form onSubmit={(e) => { passwords.newPassword != "" && passwords.confirmPassword != "" ? handleOnClick() : toast.error("Tous les champs doivent être renseignés"); e.preventDefault() }}>
            <div className=" gap-4 flex flex-col items-center relative bg-blue z-10">
              <Input type="password" placeholder={"Nouveau mot de passe"} onChange={(e) => { setPasswords({ ...passwords, newPassword: e.target.value }) }} />
              <Input type="password" placeholder={"Confirmer mot de passe"} onChange={(e) => { setPasswords({ ...passwords, confirmPassword: e.target.value }) }} />
            </div>
            <div className="flex justify-end relative mt-[25px] z-10  ">
              <Button type="submit">{loading ? "Validation..." : "Changer mon mot de passe"}</Button>
            </div>
          </form>
        </div>
      </Template>
    </>
  );
}
