import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserContext } from "../../../context";

export function PanierButton() {

  const [panierLength, setPanierLength] = useState(0);

  const { panier } = useUserContext();

  useEffect(() => {
    // if localstorage is empty, set panierLength to 0
    if (localStorage.getItem("vb-bmx-panier") === null) {
      setPanierLength(0);
    } else {
      // else, set panierLength to the length of the localstorage
      setPanierLength(JSON.parse(localStorage.getItem("vb-bmx-panier")).length);
    }
      
  }, []);

  useEffect(() => {
    if(localStorage.getItem("vb-bmx-panier") === null) {
      localStorage.setItem("vb-bmx-panier", JSON.stringify([]))
    }
    setPanierLength(JSON.parse(localStorage.getItem("vb-bmx-panier")).length)
  }, [panier])


  return (
    <div className="right-[160px] absolute top-[222px] ">
      <Link href="/panier">
        <a className="w-[160px] flex items-center relative col-start-10 h-[50px] group duration-200 text-white font-roboto font-medium gap-[14px] pr-2 group hover:bg-white hover:text-red">
          <div className="w-[10px] h-[50px] bg-red duration-200  "></div>
          <svg
            width="35"
            height="24"
            viewBox="0 0 35 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-red fill-white"
              d="M26.5125 8.75L24.0333 1.925C23.8281 1.36223 23.4552 0.875949 22.965 0.531732C22.4747 0.187516 21.8907 0.00192737 21.2917 0H18.9583C18.1562 0 17.5 0.65625 17.5 1.45833C17.5 2.26042 18.1562 2.91667 18.9583 2.91667H21.2917L23.4208 8.75H16.4062L15.8813 7.29167H16.0125C16.8146 7.29167 17.4708 6.63542 17.4708 5.83333C17.4708 5.03125 16.8146 4.375 16.0125 4.375H11.6667C10.8646 4.375 10.2083 5.03125 10.2083 5.83333C10.2083 6.63542 10.8646 7.29167 11.6667 7.29167H12.7604L15.4146 14.5833H14.4375C13.7958 11.3313 11.0688 8.925 7.65625 8.76458C3.57292 8.56042 0 11.9583 0 16.0417C0 20.125 3.20833 23.3333 7.29167 23.3333C10.8792 23.3333 13.7812 20.8687 14.4375 17.5H20.5625C21.2042 20.7521 23.9313 23.1583 27.3438 23.3188C31.4271 23.5083 35 20.125 35 16.0271C35 11.9438 31.7917 8.73542 27.7083 8.73542H26.5125V8.75ZM11.4042 17.5C10.7917 19.2938 9.07083 20.5333 7 20.4021C4.82708 20.2708 3.01875 18.4333 2.91667 16.2458C2.81458 13.6938 4.76875 11.6667 7.29167 11.6667C9.23125 11.6667 10.8208 12.8771 11.4042 14.5833H8.75C7.94792 14.5833 7.29167 15.2396 7.29167 16.0417C7.29167 16.8438 7.94792 17.5 8.75 17.5H11.4042ZM20.5625 14.5833H18.5208L17.4563 11.6667H21.875C21.2333 12.5125 20.7667 13.4896 20.5625 14.5833ZM27.5333 20.4167C25.2875 20.3292 23.3917 18.4188 23.3333 16.1583C23.3042 14.7583 23.9021 13.5333 24.8646 12.7167L25.7688 15.1958C26.0458 15.9542 26.8771 16.3479 27.6354 16.0708C28.3938 15.7938 28.7875 14.9625 28.5104 14.2042L27.5917 11.6813L27.6063 11.6667C30.1146 11.6083 32.0979 13.5479 32.0979 16.0417C32.1005 16.6331 31.9828 17.2189 31.7519 17.7634C31.521 18.3079 31.1817 18.7997 30.7548 19.209C30.3278 19.6182 29.822 19.9364 29.2682 20.144C28.7144 20.3516 28.1241 20.4444 27.5333 20.4167Z"
            />
          </svg>
          Panier {" "}
          
          {panierLength > 0 && "("+panierLength+")"}
        </a>
      </Link>
    </div>
  );
}
