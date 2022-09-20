import Head from "next/head";
import { useEffect, useState } from "react";
import { logout } from "../api/auth/auth";
import { Button, Input, Paragraph, TextLink } from "../components/atoms";
import { Template } from "../components/molecules/templates/Template";
import { useUserContext } from "../context";
import { useRouter } from "next/router";

export default function Login() {
    
    const { setStatus, setUser } = useUserContext();

    const navigate = useRouter()

    const logoutFunction = async () => {
        await logout();
        setStatus("disconnected");
        setUser(null);
        navigate.push("/")
    }

  useEffect(() => {logoutFunction()})
  

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Template title="Deconnexion">
        
      </Template>
    </>
  );
}
