import Image from "next/image";
import { SmallArticle } from "../../molecules";
import { Paragraph,RoundedIcon,BigParagraph, SubTitle } from "../../atoms";

export function Modal({ isOpen, setIsOpen = () => {} }) {
  return (
    <>
      {isOpen && (
        <>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className="cursor-pointer z-20 bg-[#000000]/[.35] overflow-hidden fixed min-h-screen w-screen top-0 left-0 flex items-center justify-center"
          ></div>
          <div className=" z-30 absolute top-1/2 min-h-[435px] w-[778px] left-1/2 -translate-y-[250px] -translate-x-1/2 bg-white opacity-100 rounded-lg">
            <div className="w-full flex justify-between items-center pr-[25px]">
              <div className="flex items-center w-[653px] justify-between h-[98px] border-b-2 border-red pl-[30px]">
                <SubTitle className="text-blue ">COMMANDE :</SubTitle>
                <SubTitle className="text-blue">VBMX00000001</SubTitle>
                <BigParagraph className="italic text-blue">
                  05/07/2022
                </BigParagraph>
              </div>
              <RoundedIcon onClick={() => {setIsOpen(false)}} icon={"/assets/img/cross.svg"}/>
              
            </div>
            <div className="w-full flex items-center mt-5 px-8">
              <div className="flex py-2 flex-col gap-5 ">
                <Paragraph className="text-blue">Kshlerin Traci</Paragraph>
                <Paragraph className="text-blue">
                  KshlerinTraci@GMAIL.com
                </Paragraph>
                <Paragraph className="text-blue">0123456789</Paragraph>
              </div>
              <span className="h-[122px] w-[2px] ml-[45px] mr-5 bg-red"></span>
              <div className="flex py-2 flex-col gap-5 ">
                <Paragraph className="text-blue">
                  Nombre d'articles : X articles
                </Paragraph>
                <Paragraph className="text-blue">Total : XXX€</Paragraph>
                <Paragraph className="text-blue">Status : en cours</Paragraph>
              </div>
            </div>
            <div className="mt-[30px] px-8">
              <BigParagraph className="text-blue">ARTICLES : </BigParagraph>
              <div className="w-full grid grid-cols-2 gap-4 mt-4 mb-8">
                <SmallArticle/>
                <SmallArticle/>
                <SmallArticle/>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
