import joinClasses from "../../../helpers/joinClasses";

export function TableContent({ children, className = "" }) {
    return <td className={joinClasses(className,"font-lato sm:text-bigger text-white text-base text-center  first:pl-[10px] 350:text-base text-sm")}>{children}</td>;
  }
  