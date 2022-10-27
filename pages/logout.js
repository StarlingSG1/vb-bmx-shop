import Head from "next/head";
import { useEffect, useState } from "react";
import { logout } from "../api/auth/auth";
import { Button, Input, Paragraph, TextLink } from "../components/atoms";
import { Template } from "../components/molecules/templates/Template";
import { useUserContext } from "../context";
import { useRouter } from "next/router";

export default function Login() {
    
    const { setStatus, setUser, setNoLogged } = useUserContext();

    const navigate = useRouter()

    const logoutFunction = async () => {
        await logout();
        setStatus("disconnected");
        setNoLogged(true);
        setUser(null);
        navigate.push("/")
    }

  useEffect(() => {logoutFunction()})
  

  return (
    <>
      <Head>
        <title>Déconnexion - Boutique BMX club Verrières le Buisson</title>
      </Head>
      <Template title="Déconnexion">
        <Paragraph>Vous êtes déconnecté</Paragraph>
      </Template>
    </>
  );
}
