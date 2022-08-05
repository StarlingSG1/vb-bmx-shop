import Image from "next/image";
import joinClasses from "../../../helpers/joinClasses";

export function RoundedIcon({ onClick, icon, className = "" }) {
  return (
    <div
      onClick={onClick}
      className={joinClasses(className, "bg-grey-light h-[50px] w-[50px] cursor-pointer rounded-full flex items-center justify-center")}
    >
      <Image width="26" height="26" src={icon} />
    </div>
  );
}
