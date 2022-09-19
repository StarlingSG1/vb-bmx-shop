import Head from "next/head";
import { Button, Input, TextLink } from "../components/atoms";
import { Template } from "../components/molecules/templates/Template";
import { toast } from "react-toastify";
import { useState } from "react";
import { registerUser } from "../api/auth/auth";
import { useRouter } from "next/router";

export default function Register() {

  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    conditions: true,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useRouter()


  const registerTheUser = async () => {
    setLoading(true);
    const response = await registerUser(userCredentials)
    response?.error ? toast.error(response.message) : navigate.push("/login")
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Template title="Inscription">
        <div className="sm:w-[593px] w-full m-auto">
          <div className=" gap-4 flex flex-col items-center relative bg-blue z-10">
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-blue -z-10"></span>
            <span className="w-[284px] h-[284px] absolute -z-20  rounded-full border-8 border-red -top-[60px] -left-[109px]"></span>
            <div className=" flex sm:flex-row flex-col items-center sm:justify-between sm:gap-0 gap-4  w-full">
              <Input
                type="text"
                className={"sm:!w-[284px] "}
                placeholder={"Prénom"}
                onChange={(e) => {setUserCredentials({...userCredentials, firstName: e.target.value})}}
              />
              <Input type="text" className={"sm:!w-[284px]"} placeholder={"Nom"} onChange={(e) => {setUserCredentials({...userCredentials, lastName: e.target.value})}}  />
            </div>
            <Input type="email" placeholder={"Adresse mail"} onChange={(e) => {setUserCredentials({...userCredentials, email: e.target.value})}} />
            <Input type="password" placeholder={"Mot de passe"} onChange={(e) => {setUserCredentials({...userCredentials, password: e.target.value})}} />
            <Input type="password" placeholder={"Confirmer mot de passe"} onChange={(e) => {setUserCredentials({...userCredentials, confirmPassword: e.target.value})}} />
            <Input type="phone" placeholder={"Numéro de téléphone"} onChange={(e) => {setUserCredentials({...userCredentials, phone: e.target.value})}} />
          </div>

          <div className="flex sm:flex-row flex-col-reverse justify-between items-center relative mt-[25px] z-10 pl-8 pr-[15px]">
            <span className="absolute h-[50px] w-[50px] border-[5px] rounded-full sm:right-[4px] sm:-bottom-[10px] hidden sm:block border-white -z-10"></span>
            <TextLink href="/login">J'ai déjà un compte</TextLink>
            <span className="sm:w-[1px] sm:h-[35px] h-[1px] w-[270px] sm:py-0 my-5 bg-white"></span>{" "}
            <Button onClick={() => {registerTheUser()}} >{!loading ? "Créer mon compte" : "Création..."}</Button>
          </div>
        </div>
      </Template>
    </>
  );
}
