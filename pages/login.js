import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Input, Paragraph, TextLink } from "../components/atoms";
import { Template } from "../components/molecules/templates/Template";
import { useUserContext } from "../context";

export default function Login() {

  // import context 
  const { loading, loginTheUser, setLoading } = useUserContext();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);
   
      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }
   
      if (isScriptExist && callback) callback();
    }
   
    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=6LeigTEiAAAAAIGfWkks2C0_6EsYXiR2D7xqtmb8`, function () {
    });
    setLoading(false)
  }, []);

  const handleOnClick = e => {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute("6LeigTEiAAAAAIGfWkks2C0_6EsYXiR2D7xqtmb8", { action: 'submit' }).then(token => {
        loginTheUser(userCredentials, token)});
    });
  }

  return (
    <>
      <Head>
        <title>Connexion - Boutique BMX club Verrières le Buisson</title>
      </Head>
      <Template title="Connexion">
        <div className="sm:w-[593px] w-full m-auto">
          <form onSubmit={(e) => {userCredentials.email != "" && userCredentials.password != "" ? handleOnClick(e) : toast.error("Tous les champs doivent être renseignés"); e.preventDefault()}}>

          <div className=" gap-4 flex flex-col items-center relative bg-blue z-10">
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-blue -z-10"></span>
            <span className="w-[126px] h-[126px] absolute -z-20  rounded-full border-8 border-red -top-[33px] -left-[63px]"></span>
            <Input type="email" placeholder={"Adresse mail"} onChange={(e) => {setUserCredentials({...userCredentials, email: e.target.value})}} />
            <Input type="password" placeholder={"Mot de passe"} onChange={(e) => {setUserCredentials({...userCredentials, password: e.target.value})}} />
          </div>
          <div className="flex justify-end mt-1">
            <TextLink href="/password/reset">mot de passe oublié</TextLink>
          </div>
          <div className="flex sm:flex-row flex-col-reverse justify-between items-center relative mt-[25px] z-10 pl-8 pr-[15px]">
            <span className="absolute h-[50px] w-[50px] border-[5px] rounded-full sm:right-[4px] sm:-bottom-[10px] hidden sm:block border-white -z-10"></span>
            <TextLink href="/register">Je n'ai pas de compte</TextLink>
            <span className="sm:w-[1px] sm:h-[35px] h-[1px] w-[270px] sm:py-0 my-5 bg-white"></span>{" "}
            <Button type="submit">{loading ? "Connexion..." : "Se connecter"}</Button>
          </div>
          </form>
        </div>
      </Template>
    </>
  );
}
