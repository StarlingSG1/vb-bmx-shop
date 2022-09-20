import { RoundedIcon } from "../decorations/RoundedIcon";
import { Paragraph } from "../texts/Paragraph";

export function Card({ children, icon, title }) {
  return (
    <div className="h-[175px] hover:translate-x-1 hover:translate-y-1 duration-200 lg:col-span-2 sm:col-span-4 350:col-span-1 col-span-2 xl:first:col-start-2 shadow-card bg-white rounded-lg xl:pt-[30px] sm:pt-5 xl:pl-[30px] sm:pl-5 sm:block flex flex-col justify-center items-center">
      <RoundedIcon className="cursor-default" icon={icon} />
      <Paragraph className={"text-blue my-2.5 sm:text-left text-center"}>{title}</Paragraph>
      <p className="text-red font-josefin text-bigger">{children}</p>
    </div>
  );
}
