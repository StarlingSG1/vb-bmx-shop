import { RoundedIcon } from "../decorations/RoundedIcon";
import { Paragraph } from "../texts/Paragraph";

export function Card({ children, icon, title }) {
  return (
    <div className="h-[175px] hover:translate-x-1 hover:translate-y-1 duration-200 col-span-2 first:col-start-2 shadow-card bg-white rounded-lg pt-[30px] pl-[30px]">
      <RoundedIcon className="cursor-default" icon={icon} />
      <Paragraph className={"text-blue my-2.5 "}>{title}</Paragraph>
      <p className="text-red font-josefin text-bigger">{children}</p>
    </div>
  );
}
